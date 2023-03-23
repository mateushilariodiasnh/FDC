import { DownArrow } from "./icons";
import { useState } from "react";
import { IDataFaq } from "./data/Faq";

interface IDataProps {
    data: IDataFaq;
}

export default function Faq({ data }: IDataProps): JSX.Element {
    const { number, title, content} = data
    const [clickArrow, setClickArrow] = useState<boolean>(true)
    return (
        <div className="space-y-6 font-openSans font-normal text-primaryGrayDark divide-y divide-tertiaryGrayBlue w-full max-w-2xl lg:px-8S">
            <button onClick={(): void => setClickArrow(!clickArrow)} className="text-start w-full flex space-x-6 items-center">
                <p className="grow font-openSans text-1.5xl font-bold flex space-x-4">
                    <span className="text-tertiaryOrange pl-6">{number} </span>
                    <span>{title}</span>
                </p>
                <span className={`${clickArrow ? "" : "rotate-180"}`}>
                    <DownArrow className="h-4 w-2 mr-12" />
                </span>
            </button>
            <p className={`pt-6 ${clickArrow ? "hidden" : "block"} mx-6 text-1.5xl font-openSans font`}>{content}</p><br></br>
            <div className="mx-6 divide-y divide-tertiaryGrayBlue"></div>
        </div>
    )
}
