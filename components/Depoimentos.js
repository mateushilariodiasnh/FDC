import depositions from "./DepositionsData";
import { QuotationMarks } from "./icons";

export default function depoimentos({className, data}) {

    const Depoimento = ()=>
    (
        <div className="bg-white border-2 border-{#E4E2E2} mx-12">
            <div className=" border-t-8 border-orange-500 mx-6 mt-6"></div>
            <div className="relative">
                <QuotationMarks className="h-7 w-10 absolute left-8 z-10"/>
                <p className="pl-14 pr-6 my-6 relative z-20"> {data.text}</p><br></br>
            </div>
            <p className="mx-6 font-bold"> {data.author}</p>
            <p className="mx-6"> {data.ocupation}</p><br></br>
        </div>
    )
    return (
        <>
            <div className={""+ className}>
                <Depoimento/>
            </div>
        </>
    )
}
