import { notFound } from "next/navigation";

interface ReviewParams {
    params: Promise<{
        productid: string,
        reviewid: string;
    }>
}

export default async function Review(props: ReviewParams) {

    const { productid, reviewid } = await props.params;

    if (parseInt(reviewid) > 1000) {
        notFound();
    }

    if (parseInt(reviewid) === 900) {
        throw Error("Invalid Id.");
    }

    return (
        <div>
            <h1>Produto {productid}</h1>
            <p>Review {reviewid}</p>
        </div>
    );
}
