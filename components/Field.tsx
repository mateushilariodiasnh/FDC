import { ReactNode } from "react";

interface IFieldsProps {
    children: ReactNode;
    className?: string;
}

export default function Fields ({children, className}: IFieldsProps): JSX.Element {
    return (
        <>
            <div className={"bg-tertiaryOrange font-nexaSlab h-11 px-4 py-2 space-y-reverse lg:px-4 lg:pb-1 lg:pt-2 lg:mx-0 text-2xl lg:space-x-6" + className}>{children}</div>
        </>
    );
}