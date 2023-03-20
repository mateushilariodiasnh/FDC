export default function Cards({ className, image: Image, content }) {
    return (
        <div className={"bg-white h-full text-primaryGrayDark flex-col justify-center items-center mt-10 lg:mt-0 border-[1px] border-secondaryGrayMedium py-8 space-y-center " + className}>
            <div className="mb-4 flex items-center justify-center">
                {Image && <Image className='h-14 mx-auto' />}
            </div>
            <div className="text-1.5xl font-openSans text-center">
                {content}
            </div>
        </div>
    )
}