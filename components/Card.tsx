import { IDataCard } from "./data/CardsData"

 interface ICardProps {
    data: IDataCard;
    className?: string;
}

export default function Cards({ className, data }: ICardProps): JSX.Element {
    const { image: Image, content, id} = data
    return (
        <div className={"bg-white h-full text-primaryGrayDark flex-col justify-center items-center mt-10 lg:mt-0 border-[1px] border-secondaryGrayMedium py-8 space-y-center " + className}>
            <div className="mb-4 flex items-center justify-center">
                {Image && <Image className='h-14 mx-auto' />}
            </div>
            <div className="text-1.5xl mx-2 font-openSans text-center">
                {content}
            </div>
        </div>
    )
}