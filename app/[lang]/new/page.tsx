import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { neww } = await getDictionary(lang)
  return (
    <>
      <section className='relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8'>
        <div className='absolute inset-0 -z-10  opacity-20' />
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left  shadow-xl  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
      
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-semibold leading-8 text-gray-100 sm:text-2xl sm:leading-9'>
              <p>{neww.main.firstText}</p>
            </blockquote>
            <figcaption className='mt-10'>
             
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-100'>
                  {neww.main.secondText}
                </div>
             
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
