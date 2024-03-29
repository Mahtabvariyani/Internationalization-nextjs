import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'



export default async function Header({ lang }: { lang: Locale }) {
  
  const { navigation } = await getDictionary(lang)
  return (
    <div className='py-6 text-white'>
      <div className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          {Object.entries(navigation)
            .filter(([key]) => key !== 'home') 
            .map(([key, value]) => (
              <li key={key}>
                <Link href={`/${lang}/${key}`}>{value}</Link>
              </li>
            ))}
        </ul>
        <LocaleSwitcher />
      </div>
    </div>
  )
}
