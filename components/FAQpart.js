import FaqShow from "./FaqShow"

export default function FAQpart() {
  return (
    <section className='lg:pt-32 mx-auto lg:max-w-7xl lg:flex lg:flex-row lg:space-x-32 '>
      <div className='mx-6 '>
        <div className='border-t-8 border-white m-6 lg:mt-0 lg:max-w-xs lg:mx-auto'></div>
        <h2 className='uppercase text-primaryBlue text-center mt-10 mb-8 text-2xl lg:text-3.5xl font-nexaSlab'>faq </h2>
        <div className='border-t-8 border-white m-6 lg:max-w-xs lg:mx-auto'></div>
      </div>
      <article className='mx-6 lg:pb-32 '>
        <FaqShow className="font-openSans" />
      </article>
    </section>
  )
}