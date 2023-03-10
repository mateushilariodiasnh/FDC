export default function Cards({ children, className }) {
    return (
        <div className={"bg-white h-full w-full lg:h-auto lg:w-auto text-center text-primaryGrayDark  font-openSans mx-auto mt-10 lg:mt-0 border-[1px] border-secondaryGrayMedium px-8 pb-8 space-y-center " + className}>
            {children}
        </div>
    )
}