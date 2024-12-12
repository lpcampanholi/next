import Title from "@/src/components/Title";
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
        throw Error("Invalid 900 Id.");
    }

    return (
        <div>
            <Title>Produto</Title>
            <p>Review {reviewid}</p>
        </div>
    );
}
