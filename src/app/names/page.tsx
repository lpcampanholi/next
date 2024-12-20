"use client";

import Title from "@/src/components/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

type Nome = {
    id: number,
    name: string
}

type NomeParaEnviar = {
    name: string
}

export default function NamesPage() {

    const [nomes, setNomes] = useState<Nome[]>([]);
    const [newName, setNewName] = useState<string>("");
    const [textopesquisa, setTextoPesquisa] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState<boolean>(false);

    async function buscarNomes() {
        setIsLoading(true);
        try {
            const response = await fetch("/names/api");
            const nomes = await response.json();
            setNomes(nomes);
        } catch (error) {
            console.log("Erro: " + error);
        } finally {
            setIsLoading(false);
        }
    }

    async function adicionarNome(data: NomeParaEnviar) {
        const response = await fetch("/names/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            buscarNomes();
            exibirMensagemSucesso();
        } else {
            console.log("Erro ao salvar o nome");
        }
    }

    async function excluirNome(id: number) {
        const response = await fetch(`/names/${id}/api`, {
            method: "DELETE"
        });
        if (response.ok) {
            buscarNomes();
        } else {
            console.log("Erro ao salvar o nome");
        }
    }

    async function atualizarNome(id: number, name: string) {
        const nome = prompt("Escreva o novo nome:", name);
        if (nome) {
            const novoNome: NomeParaEnviar = {
                name: nome
            }
            const response = await fetch(`/names/${id}/api`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoNome)
            });

            if (response.ok) {
                buscarNomes();
            } else {
                console.log("Erro ao atualizar o nome");
            }
        }
    }

    function exibirMensagemSucesso() {
        setIsSuccessMessageVisible(true);
        setTimeout(() => {
            setIsSuccessMessageVisible(false);
        }, 3000);
    }

    async function pesquisarNome(textoPesquisa: string) {
        const response = await fetch(`3000/names/api?query=${textoPesquisa}`);
        const nomes: Nome[] = await response.json();
        setNomes(nomes);
    }

    function submeterPesquisa(e: React.FormEvent) {
        e.preventDefault();
        pesquisarNome(textopesquisa);
    }

    function submeterForm(e: React.FormEvent) {
        e.preventDefault();
        const novoNome: NomeParaEnviar = {
            name: newName
        }
        adicionarNome(novoNome);
        setNewName("");
    }

    useEffect(() => {
        buscarNomes();
    }, [])

    return (
        <div>
            <Title>Nomes</Title>

            <form
                className="bg-transparent border-violet-500 border-[1px] rounded-lg p-2 w-[50%] mb-3 flex"
                onSubmit={submeterPesquisa}
            >
                <input
                    className="bg-transparent w-[100%] outline-none"
                    type="text"
                    placeholder="Pesquisar"
                    autoFocus
                    onChange={e => setTextoPesquisa(e.target.value)}
                />
                <button>
                    <img src="/lupa.png" className="w-6" alt="" />
                </button>
            </form>

            {isSuccessMessageVisible &&
                <div className="bg-green-950 rounded-lg p-2 w-[50%] mb-3">
                    Adicionado com sucesso!
                </div>
            }

            {isLoading ?
                <p>Carregando...</p>
                :
                <ul>
                    {nomes.map((nome: Nome) => (
                        <li key={nome.id} className="bg-neutral-800 w-[50%] mb-4 rounded-lg flex justify-between gap-1 py-2">
                            <Link href={`/names/${nome.id}`} className="hover:underline">
                                <div className="px-4">
                                    <span>{nome.id} </span>
                                    <span>{nome.name}</span>
                                </div>
                            </Link>
                            <div className="flex gap-2 px-2">
                                <button
                                    className="bg-red-950 hover:bg-red-900 px-2 rounded-full"
                                    onClick={() => excluirNome(nome.id)}
                                >
                                    x
                                </button>
                                <button
                                    className="bg-blue-950 hover:bg-blue-900 px-2"
                                    onClick={() => atualizarNome(nome.id, nome.name)}
                                >
                                    Editar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }

            <h3 className="text-2xl">Adicionar nome</h3>
            <form onSubmit={submeterForm}>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Insira o nome"
                    className="px-4 py-2"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-xl"
                >
                    Salvar
                </button>
            </form>
        </div>
    );
}
