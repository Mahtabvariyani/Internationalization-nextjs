import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function MAinText({ lang }: { lang: Locale }) {
  const { MainPage } = await getDictionary(lang)

  return <div>
   <div className='bg-red-300'>
    {MainPage.home.BigText}
    
    </div> 
    <div className='bg-blue-400'>
        {MainPage.home.SmallText}

    </div>

  </div>
}

