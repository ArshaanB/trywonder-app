import '@/styles/tailwind.css'
import 'focus-visible'
import Script from 'next/script'

import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_CONVERT_KIT_API_KEY
  return (
    <>
      <Script
        async
        src={'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID}
      />
      <Script id="gtag-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
