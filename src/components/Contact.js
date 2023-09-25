/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const Contact = () => {
  return (
    <>
      <div className="relative isolate bg-gray-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-secondary mb-10">Contact Us</h2>
            <iframe title="Google Maps location of Double R Vending" className="rounded-3xl my-9 h-full shadow border-0 block" src="https://www.google.com/maps/embed?z-14&pb=!1m14!1m8!1m3!1d7355176.85781452!2d-80.262153!3d25.823528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0bbadef6bbb%3A0x3dd5242b862d2931!2s25%20E%209th%20Ct%2C%20Hialeah%2C%20FL%2033010!5e0!3m2!1sen!2sus!4v1686945514638!5m2!1sen!2sus" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-800">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  25 E 9th Ct
                  <br />
                  Hialeah, FL 33010
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="tel:+1 (305) 710-1818">
                    +1 (305) 710-1818
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="mailto:doublervendingco@bellsouth.net">
                  doublervendingco@bellsouth.net
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" name="contact" data-netlify="true" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <input type="hidden" name="form-name" value="contact" />
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-secondary">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-secondary">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-secondary">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-secondary">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-secondary">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-gray-100 shadow-sm hover:bg-yellow-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 focus-visible:bg-yellow-300 focus-visible:text-black"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    {/* <svg  className="relative rotate-180" viewBox="0 0 1439 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1440 54.5205L1380.26 85.6751C1320.52 118.128 1198.97 181.735 1079.48 190.822C960 199.908 840.515 154.475 718.97 122.022C599.485 90.8675 480 72.694 360.515 67.5016C238.97 63.6072 119.485 72.694 59.7426 76.5883L0 81.7807V0H59.7426C119.485 0 238.97 0 360.515 0C480 0 599.485 0 718.97 0C840.515 0 960 0 1079.48 0C1198.97 0 1320.52 0 1380.26 0H1440V54.5205Z" fill="white"/>
    </svg> */}
    </>
  )
}
