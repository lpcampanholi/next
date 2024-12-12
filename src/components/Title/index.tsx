interface TitleProps {
    children: string;
}

export default function Title({ children }: TitleProps) {
    return (
        <h1 className="text-3xl my-4">
            {children}
        </h1>
    );
}
