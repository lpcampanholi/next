"use client";

import Title from "@/src/components/Title";
import { useEffect, useState } from "react";

type Name = null | {
    id: number,
    name: string
}

export default function NamePage({ params }: { params: { id: string } }) {
    const [nome, setNome] = useState<Name>(null);

    async function buscarNome(id: number) {
        const response = await fetch(`http://localhost:3000/names/${id}/api`);
        if (!response.ok) {
            throw new Error("Erro ao buscar o nome");
        }
        const nomeData = await response.json();
        setNome(nomeData);
    }

    useEffect(() => {
        buscarNome(parseInt(params.id));
    }, [params.id]);

    return (
        <div>
            <Title>Nome</Title>
            {nome ? (
                <>
                    <p>ID: {nome.id}</p>
                    <p>Nome: {nome.name}</p>

                </>
            ) : <p>Carregando...</p>}
        </div>
    );
}
