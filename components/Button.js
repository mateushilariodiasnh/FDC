export default function buttons ({children, className}) {
    return (
        <>
            <button className={"uppercase"+className}>{children}</button>
        </>
    );
}