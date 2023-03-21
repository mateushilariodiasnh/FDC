import { QuotationMarks } from "./icons";

export default function depoimentos({ className, data }) {

    return (
        <div className={className}>
            <div className="bg-white border-2 border-secondaryGrayMedium text-primaryGrayDark mx-12 flex flex-col h-full space-y-center ">
                <div className=" border-t-8 border-tertiaryOrange mx-6 mt-6"></div>
                <div className="relative">
                    <QuotationMarks className="h-7 w-10 absolute top-5 left-8 z-10" />
                    <p className="pl-14 pr-6 mt-6 relative z-20 text-1.5xl font-normal font-openSans text-primaryGrayDark"> {data.text}</p><br></br>
                </div>
                <p className="mx-6 font-bold text-1.5xl font-openSans"> {data.author}</p>
                <p className="mx-6 text-1.5xl font-openSans"> {data.ocupation}</p><br></br>
            </div>
        </div>
    )
}
