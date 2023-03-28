import { QuotationMarks } from "./icons";
import { IDataDepositions } from "./data/DepositionsData";

interface IDataPropsDepositions {
    data: IDataDepositions;
    className: string;
}

export default function DepositionsComponent({ className, data }: IDataPropsDepositions): JSX.Element{

    return (
        <div className={className}>
            <div className="bg-white border-2 border-secondaryGrayMedium text-primaryGrayDark flex flex-col h-full lg:w-full">
                <div className=" border-t-8 border-tertiaryOrange mx-6 mt-6 lg:mx-8"></div>
                <div className="relative">
                    <QuotationMarks className="h-7 w-10 absolute top-5 left-8 z-10" />
                    <p className="pl-14 pr-6 lg:pr-8 lg:mr-8 mt-6 relative z-20 text-1.5xl font-normal font-openSans text-primaryGrayDark"> {data.text}</p><br></br>
                </div>
                <p className="mx-6 lg:ml-8 font-bold text-1.5xl font-openSans"> {data.author}</p>
                <p className="mx-6 lg:ml-8 text-1.5xl font-openSans"> {data.ocupation}</p><br></br>
            </div>
        </div>
    )
}
