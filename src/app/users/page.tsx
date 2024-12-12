export default function page() {
    
    const teste = false;

    return (
        <div data-teste={teste} className="data-[teste=true]:bg-red-500">
            <h1>Página de Usuários</h1>
        </div>
    );
}
