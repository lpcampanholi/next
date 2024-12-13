import { redirect } from "next/navigation";
import { data } from "../api/data";



export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const id  = parseInt(params.id);
    // O redirect direciona para uma página quando ele não encontrar o ID do nome
    if (id > data.length) {
        redirect("/names");
    }
    
    const name = data.find(name => name.id === id);
    if (!name) {
        return new Response("ID não encontrado");
    }
    return Response.json(name);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const { name } = body;
    const index = data.findIndex(
        user => user.id === parseInt(id)
    );
    data[index].name = name;
    return Response.json(data[index]);
}

export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const index = data.findIndex(
        user => user.id == parseInt(params.id)
    );
    const deletedUser = data[index];
    data.splice(index, 1);
    return Response.json(deletedUser);
}
