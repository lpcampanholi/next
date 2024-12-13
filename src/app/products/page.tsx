import Title from "@/src/components/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "Produtos"
    }
}

export default function Products() {
    
    const produtos = [
        {id: 1, title: "produto 1"},
        {id: 2, title: "produto 2"},
        {id: 3, title: "produto 3"},
        {id: 4, title: "produto 4"},
        {id: 5, title: "produto 5"},
    ];

    // O atributo replace no componente Link do Next faz voltar para a tela inicial da aplicação

    return (
        <div>
            <Title>Produtos</Title>
            {produtos.map(produto => (
                <p key={produto.id} className="no-underline hover:underline">
                    <Link href={`/products/${produto.id}`} replace>{produto.title}</Link>
                </p>
            ))}
        </div>
    );
}
