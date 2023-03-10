import { DownArrow } from "./icons";
import { useState } from "react";

export default function Faq({data}) {

    const [clickArrow, setClickArrow] = useState(true);
        return(
            <div className="space-y-6 font-OpenSans font-normal text-base text-primaryGrayDark divide-y divide-gray-lither w-full max-w-3.5xl px-4 lg:px-8">
                <button onClick={()=>setClickArrow(!clickArrow)} className="text-start w-full max-w-3xl flex space-x-6 items-center">
                    <p className="grow"><strong><span className="text-tertiaryOrange">{data.number} </span>{data.title}</strong></p>
                    <span className={`${clickArrow ? "" : "rotate-180"}`}>
                        <DownArrow className="h-4 w-2"/>
                    </span>
                </button>
                    <p className={`pt-6 ${clickArrow ? "hidden" : "block"}`}>{data.content}</p><br></br>
                    <div className=" divide-y divide-gray-lither"></div>
            </div>
        )
}
