import GlobalStyles from '@components/GlobalStyles'
import '@fontsource/archivo'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

function TemplateApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <GlobalStyles />
    </RecoilRoot>
  )
}

export default TemplateApp
