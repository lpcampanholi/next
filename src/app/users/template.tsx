"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "Profile", href: "/users/profile" },
    { name: "Config", href: "/users/config" },
    { name: "Info", href: "/users/info" },
]

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    const [value, setValue] = useState("");
    const pathName: string = usePathname();

    return (
        <>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div>
                {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);

                return (
                    <Link className={`${isActive ? "text-red-900" : "text-blue-900"}`}
                    key={link.href}
                    href={link.href}>
                        {link.name}
                    </Link>
                );
                })}
            </div>
            {children}
        </>
    );
}
