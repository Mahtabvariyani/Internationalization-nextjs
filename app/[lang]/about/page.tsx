import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import {NavigationMenuDemo} from '../components/Menu'
import Image from 'next/image'
export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <>
      <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">{}</h2>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">{page.about.title}</h2>
              <div className="mt-6 text-lg leading-8 text-gray-100">
               {page.about.description}
              <NavigationMenuDemo />
              </div>
            

            </div>
          </div>
          <Image
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    
ƒ
    </>
  )
}
