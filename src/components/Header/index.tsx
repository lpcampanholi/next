import Link from "next/link";

export default function Header() {

    const items = [
        { title: "Home", href: "/" },
        { title: "Produtos", href: "/products" },
        { title: "Clientes", href: "/products/categorias" },
        { title: "Usuários", href: "/users" },
        { title: "Login", href: "/login" },
        { title: "Register", href: "/register" },
        { title: "FAQ", href: "/faq" },
        { title: "Profile", href: "/profile" },
        { title: "Nomes", href: "/names" },
    ];

    return (
        <header className="bg-neutral-900 p-5">
            <nav >
                <ul className="flex justify-end gap-4">
                    {items.map(item => (
                        <li key={item.title} className="no-underline hover:underline">
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
