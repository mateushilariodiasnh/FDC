import { DownArrow } from "./icons";
import { useState } from "react";
import { IDataFaq } from "./data/Faq";

interface IDataProps {
    data: IDataFaq;
}

export default function Faq({ data }: IDataProps): JSX.Element {
    const { number, title, content } = data
    const [clickArrow, setClickArrow] = useState<boolean>(true)
    return (
        <div className="space-y-6 font-openSans font-normal text-primaryGrayDark w-full xl:max-w-2.5xl">
            <button onClick={(): void => setClickArrow(!clickArrow)} className="text-start w-full flex space-x-6 items-center pt-6">
                <p className="grow font-openSans text-1.5xl font-bold flex space-x-4">
                    <span className="text-tertiaryOrange">{number} </span>
                    <span>{title}</span>
                </p>
                <span className={`mr-8`}>
                    <DownArrow className={`h-4 w-2 lg:mr-0 ${clickArrow?"": "rotate-180"}`}  />
                </span>
            </button>
            <p className={`${clickArrow ? "hidden" : "block"} mx-6 text-1.5xl font-openSans font`}>{content}</p><br></br>
        </div>
    )
}
