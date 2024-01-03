import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              {page.home.title}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              {page.home.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
