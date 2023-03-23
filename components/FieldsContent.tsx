import { ReactNode } from "react";

interface IFieldsContentProps {
    children: ReactNode;
    className?: string;
}

export default function FieldsContent ({children, className}: IFieldsContentProps): JSX.Element {
    return (
        <>
            <div className={"font-openSans text-1.5xl" + className}>{children}</div>
        </>
    );
}