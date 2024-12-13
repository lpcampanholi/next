"use client";

import Title from "@/src/components/Title";
import { useEffect, useState } from "react";

type Nome = {
    id: number,
    name: string
}

type NomeParaEnviar = {
    name: string
}

export default function Names() {

    const [nomes, setNomes] = useState<Nome[]>([]);
    const [nomeInput, setNomeInput] = useState<string>("");

    async function buscarNomes() {
        const response = await fetch("http://localhost:3000/names/api");
        const nomes = await response.json();
        console.log("nome", nomes)
        setNomes(nomes);
    }

    async function salvarNome(data: NomeParaEnviar) {
        const response = await fetch("http://localhost:3000/names/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            buscarNomes();
        } else {
            console.log("Erro ao salvar o nome");
        }
    }

    async function excluirNome(id: number) {
        const response = await fetch(`http://localhost:3000/names/${id}`, {
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
            const response = await fetch(`http://localhost:3000/names/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoNome)
            });

            if (response.ok) {
                buscarNomes();
                console.log("Foi");
            } else {
                console.log("Erro ao atualizar o nome");
            }
        }
    }

    function submeterForm(e: React.FormEvent) {
        e.preventDefault();
        const novoNome: NomeParaEnviar = {
            name: nomeInput
        }
        salvarNome(novoNome);
        setNomeInput("");
    }

    useEffect(() => {
        buscarNomes();
    }, [])

    return (
        <div>
            <Title>Nomes</Title>

            <div className="bg-green-950 rounded-lg p-2 w-[50%] mb-3">
                Adicionado com sucesso!
            </div>

            <ul>
                {nomes.map((nome: Nome) => (
                    <li key={nome.id} className="bg-neutral-800 w-[50%] mb-4 rounded-lg flex justify-between gap-1 py-2">
                        <div className="px-4">
                            <span>{nome.id} </span>
                            <span>{nome.name}</span>
                        </div>
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

            <Title>Adicionar nome</Title>
            <form onSubmit={submeterForm}>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Insira o nome"
                    className="px-4 py-2"
                    value={nomeInput}
                    onChange={e => setNomeInput(e.target.value)}
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
