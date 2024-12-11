import Link from "next/link";
import styles from "./Users.module.css";

const navLinks = [
    { name: "Profile", href: "/users/profile" },
    { name: "Config", href: "/users/config" },
    { name: "Info", href: "/users/info" },
]

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.navegacao}>
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href}>{link.name}</Link>
                ))}
            </div>
            {children}
        </>
    );
}
