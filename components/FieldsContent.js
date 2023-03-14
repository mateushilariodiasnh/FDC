export default function FieldsContent ({children, className}) {
    return (
        <>
            <div className={"font-openSans text-1.5xl" + className}>{children}</div>
        </>
    );
}