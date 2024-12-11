import { notFound } from "next/navigation";

interface InfoParams {
    params: {
        productid: string;
    }
}

export default function Info({ params }: InfoParams) {

    if (parseInt(params.productid) > 100) {
        notFound();
    }

    return (
        <div>
            <p>Informações do produto {params.productid}</p>
            <p>{params.productid.toUpperCase()}</p>
        </div>
    );
}
