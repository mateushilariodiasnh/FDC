import Data from './CardsData.js'

export default function Cards({ className, image:Image, content}) {
    return (
        <div className={"bg-white h-full w-full lg:h-auto lg:w-auto text-center text-primaryGrayDark  font-openSans mx-auto mt-10 lg:mt-0 border-[1px] border-secondaryGrayMedium px-8 pb-8 space-y-center " + className}>
            <div>
                {Image && <Image className='h-16 mx-auto mt-8 mb-4"'/>}
            </div>
            <p>{content}</p>
        </div>
    )
}