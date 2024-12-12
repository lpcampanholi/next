"use client";

import Title from "@/src/components/Title";
import { useEffect, useState } from "react";

type Nome = {
    id: number,
    name: string
}

export default function Names() {

    const [nomes, setNomes] = useState<Nome[]>([]);

    async function buscarNomes() {
        const response = await fetch("http://localhost:3000/names/api");
        const nomes = await response.json();
        setNomes(nomes);
    }

    useEffect(() => {
        buscarNomes();
    }, [])

    return (
        <div>
            <Title>Página Nomes</Title>
            {nomes.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}

            <Title>Adicionar nome</Title>
        </div>
    );
}
