import { notFound } from "next/navigation";

interface ReviewParams {
    params: {
        productid: string,
        reviewid: string;
    }
}

export default function Review({ params }: ReviewParams) {
    
    if (parseInt(params.reviewid) > 1000) {
        notFound();
    }

    return (
        <div>
            <h1>Produto {params.productid}</h1>
            <p>Review {params.reviewid}</p>
        </div>
    );
}
