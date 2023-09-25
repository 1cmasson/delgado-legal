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
      <body>{children}</body>
    </html>
  )
}
