import { IDataList } from "../data/dataCadastro/listData"

interface IListProps {
    data: IDataList,
    className?: string,
}

export default function List({data, className}: IListProps): JSX.Element {
    
    const { image: Image, content, id} = data
    return (
        <>
            <div className="font-openSans font-normal text-primaryGrayDark text-1.5xl flex flex-row items-center mb-6">
                <div className=" bg-tertiaryOrange rounded-full h-10 lg:h-10  p-3 flex justify-center items-center mr-4">
                    {Image && <Image className="h-4"/>}
                </div>
                <div>
                    {content}
                </div>
            </div>
        </>
    )
}