import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav >
                <ul className={styles.lista}>
                    <li className={styles.item}><Link href="/">Home</Link></li>
                    <li className={styles.item}><Link href="/products">Produtos</Link></li>
                    <li className={styles.item}><Link href="/products/categories">Categorias</Link></li>
                    <li className={styles.item}><Link href="/clients">Clientes</Link></li>
                    <li className={styles.item}><Link href="/users">Usuários</Link></li>
                    <li className={styles.item}><Link href="/login">Login</Link></li>
                    <li className={styles.item}><Link href="/register">Register</Link></li>
                    <li className={styles.item}><Link href="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
}
