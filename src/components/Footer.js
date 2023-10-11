import Image from 'next/image'

const navigation = {
  firm: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: 'about-our-firm' },
    { name: 'Practices', href: 'practices' },
    { name: 'Testimonials', href: 'testimonials' },
  ],
  support: [
    { name: 'FAQs', href: 'faq' },
    { name: 'Contact Us', href: 'contact' },
  ],
  services: [
    { name: 'Real Estate Closings'},
    { name: 'Foreclosure Defense'},
    { name: 'Commercial Transactions'},
    { name: 'Estate Planning'},
    { name: 'Uncontested Divorces'}
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image width={150} height={150} src="/white-long-logo.svg" alt="Company name" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Firm</h3>
              <ul className="mt-6 space-y-4">
                {navigation.firm.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 sm:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <div
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
