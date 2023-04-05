import { ReactNode } from "react";

interface buttons {
    children: ReactNode;
    className: string;
}

export default function buttons({ children, className }: buttons): JSX.Element {
    return (
        <button className={"uppercase" + className}>{children}</button>
    );
}