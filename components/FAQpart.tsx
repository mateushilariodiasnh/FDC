import FaqShow from "./FaqShow"

export default function FAQpart() {
  return (
    <section className='pt-16 lg:pt-32 justify-center lg:flex lg:flex-row lg:space-x-32 '>
      <div className='mx-6'>
        <div className='border-y-8 border-white mb-10 lg:mt-0 lg:max-w-3.5xl lg:mx-auto'>
          <h2 className='uppercase text-primaryBlue text-center mt-10 mb-8 text-3.5xl font-nexaSlab max-w-3.5xl'>faq </h2>
        </div>
      </div>
      <article className='lg:pb-32 max-w-2xl'>
        <FaqShow className="font-openSans" />
      </article>
    </section>
  )
}