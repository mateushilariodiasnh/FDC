import { DownArrow } from "./icons";
import { useState } from "react";

export default function Faq({data}) {

    const [clickArrow, setClickArrow] = useState(true);
        return(
            <div className="space-y-6 font-openSans font-normal text-base text-primaryGrayDark divide-y divide-tertiaryGrayBlue w-full max-w-3xl px-4 lg:px-8S">
                <button onClick={()=>setClickArrow(!clickArrow)} className="text-start w-full flex space-x-6 items-center">
                    <p className="grow"><strong><span className="text-tertiaryOrange">{data.number} </span>{data.title}</strong></p>
                    <span className={`${clickArrow ? "" : "rotate-180"}`}>
                        <DownArrow className="h-4 w-2"/>
                    </span>
                </button>
                    <p className={`pt-6 ${clickArrow ? "hidden" : "block"}`}>{data.content}</p><br></br>
                    <div className=" divide-y divide-tertiaryGrayBlue"></div>
            </div>
        )
}
