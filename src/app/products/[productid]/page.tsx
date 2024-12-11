"use client"

import { notFound, usePathname } from "next/navigation";
import { use } from "react";


export default function Info(props: { params: Promise<{ productid: string }> }) {
    const { productid } = use(props.params);

    const pathName = usePathname();

    console.log(window.location.pathname);
    console.log(pathName);

    if (parseInt(productid) > 100) {
        notFound();
    }

    return (
        <div>
            <p>Informações do produto {productid}</p>
            <p>{productid.toUpperCase()}</p>
        </div>
    );
}
