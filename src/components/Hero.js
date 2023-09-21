import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden h-screen bg-hero md:bg-desktop bg-cover bg-no-repeat bg-fixed bg-black opacity-6">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg text-center md:text-left leading-8 text-blue-100">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
            <a
              href="#"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-slate-500 shadow-sm hover:bg-hover outline outline-gray-100 outline-2 focus-visible:outline-4 focus-visible:outline-slate-500 hover:outline-0 focus-visible:bg-hover focus-visible:text-white hover:text-black"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="absolute hidden right-0 z-0 bottom-0 mx-auto mt-16 md:flex md:h-[300px] lg:h-[600px] sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/delgado-hero.svg"
            alt="App screenshot"
            width={700}
            height={1400}
          />
        </div>
      </div>
    </div>
  )
}
