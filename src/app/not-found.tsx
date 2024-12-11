import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Ops... você se perdeu :O</p>
            <Link href="/">Voltar para Home</Link>
        </div>
    );
}
