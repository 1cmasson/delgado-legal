import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-hero bg-contain h-[44rem] md:bg-cover bg-no-repeat bg-fixed md:bg-desktop">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <h1 className="text-4xl font-bold text-center tracking-tight text-white sm:text-6xl">
            Your Trusted Partner for Real Estate and Legal Solutions
          </h1>
          <p className="mt-6 text-lg text-center md:text-left leading-8 text-blue-100">
            DELGADO LEGAL, P.A. is a full-service law firm and licensed settlement agent that
            provides clients with a variety of legal services, including handling your home purchase
            and/or sale. Our attorneys and staff have extensive experience representing clients in a
            variety of practice areas
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
            <a
              href="contact"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-slate-500 shadow-sm hover:bg-hover outline outline-gray-100 outline-2 focus-visible:outline-4 focus-visible:outline-slate-500 hover:outline-0 focus-visible:bg-hover focus-visible:text-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute hidden right-0 z-0 bottom-0 mx-auto mt-16 md:flex md:h-[300px] lg:h-[600px] sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image src="/delgado-hero.svg" alt="App screenshot" width={700} height={1400} />
        </div>
      </div>
    </div>
  )
}
