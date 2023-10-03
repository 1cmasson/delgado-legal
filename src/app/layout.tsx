import Head from 'next/head'
import './global.css'

export const metadata = {
  title: 'Delgado Legal P.A.',
  description: 'Estate Planning Attorneys in Miami Lakes, FL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/open-graph.svg" />
        <meta property="og:description" content=" DELGADO LEGAL, P.A. is a full-service law firm and licensed settlement agent that
         provides clients with a variety of legal services, including handling your home purchaseand/or sale." />
      </Head>
      <body>{children}</body>
    </html>
  )
}
