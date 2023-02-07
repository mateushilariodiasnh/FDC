import FaqShow from "./FaqShow"

export default function FAQpart() {
  return (
    <>
      <section className='bg-{#E3E3E3} lg:pt-32 mx-auto lg:max-w-7xl lg:flex lg:flex-row lg:space-x-32 '>
        <div className='mx-6 '>
          <div className='border-t-8 border-[#FFFFFF] m-6 lg:mt-0 lg:max-w-xs lg:mx-auto'></div>
          <h2 className='uppercase text-[#2A9FBC] text-center mt-10 mb-8 text-2xl lg:text-4xl font-nexaSlab'>faq </h2>
          <div className='border-t-8 border-[#FFFFFF] m-6 lg:max-w-xs lg:mx-auto'></div>
        </div>
        <div className='mx-6 lg:pb-32 '>
          <FaqShow className="font-openSans" />
        </div>
      </section>
    </>
  )
}
