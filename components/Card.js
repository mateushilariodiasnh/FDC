export default function Cards ({children, className}) {
    return (
        <>
            <div className={"bg-[#FFFFFF] h-full w-full lg:h-auto lg:w-auto text-center font-openSans mx-auto mt-10 lg:mt-0 border-[1px] border-{#E4E2E2} px-8 pb-8 space-y-center "+className}>
                {children}
            </div>
        </>
    )
}

//h-60 w-72 