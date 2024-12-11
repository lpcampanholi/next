export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <p style={{backgroundColor: "darkgray"}}>Especificações</p>
            {children}
        </>
    );
}