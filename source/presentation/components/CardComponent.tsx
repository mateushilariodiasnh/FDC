import { IDataCard } from "./data/CardsData"

 interface ICardProps {
    data: IDataCard;
    className?: string;
}

export default function Cards({ className, data }: ICardProps): JSX.Element {
    const { image: Image, content, id} = data
    return (
        <div className={"bg-white h-full text-primaryGrayDark flex-col justify-center items-center mt-9 lg:mt-0 border border-secondaryGrayMedium pt-8 lg:py-8 " + className}>
            <div className="mb-4 flex items-center justify-center">
                {Image && <Image className='h-14 mx-auto' />}
            </div>
            <div className="text-1.5xl text-primaryGrayDark px-4 lg:px-8 font-openSans text-center">
                {content}
            </div>
        </div>
    )
}