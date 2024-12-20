"use client";

import Title from "@/src/components/Title";
import { use, useEffect, useState } from "react";

type Name = null | {
    id: number,
    name: string
}

export default function NamePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [nome, setNome] = useState<Name>(null);

    async function buscarNome(id: number) {
        const response = await fetch(`/names/${id}/api`);
        if (!response.ok) {
            throw new Error("Erro ao buscar o nome");
        }
        const nomeData = await response.json();
        setNome(nomeData);
    }

    useEffect(() => {
        buscarNome(parseInt(resolvedParams.id));
    }, [resolvedParams.id]);

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
