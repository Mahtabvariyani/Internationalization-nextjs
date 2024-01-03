import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import MAinText from '../components/MAinText'

export default async function page({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <div className='py-24'>
      {page.test.description}

      <MAinText lang={lang} />
    </div>
  )
}
