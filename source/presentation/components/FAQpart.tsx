import FaqShow from "./FaqShow"

export default function FAQpart(): JSX.Element {
  return (
    <section className='pt-16 lg:pt-32 justify-between lg:flex lg:flex-row 2xl:justify-center'>
      <div className='mx-6 lg:mx-10'>
        <div className='border-y-8 border-white mb-10 lg:mt-0 mx-6 lg:w-72'>
          <h2 className='uppercase text-primaryBlue text-center mt-10 lg:mt-12 lg:mb-10 mb-8 text-3.5xl lg:text-4.5xl font-nexaSlab '>faq </h2>
        </div>
      </div>
      <article className='lg:pb-32 lg:ml-12 lg:mr-44'>
        <FaqShow />
      </article>
    </section>
  )
}