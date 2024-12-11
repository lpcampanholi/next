import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "Produtos"
    }
}

export default function Products() {
    const id: Number = 1;
    return (
        <div>
            <h1>Produtos</h1>
            <p><Link href={`/products/${id}`}>Produto 1</Link></p>
            <p><Link href="/products/2">Produto 2</Link></p>
            <p><Link href="/products/3" replace>Produto 3</Link></p>
            {/* O replace faz voltar para o ponto inicial da aplicação */}
        </div>
    );
}
