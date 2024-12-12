import { data } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const name = data.find(name => name.id === parseInt(params.id));
    if(!name) {
        return new Response("ID não encontrado");
    }
    
    return Response.json(name);
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { text } = body;
    const index = data.findIndex(
        user => user.id === parseInt(params.id)
    );
    data[index].name = text;
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
