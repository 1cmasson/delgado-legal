import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faLandmark,
  faBook,
  faBuilding,
  faHeart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    name: 'Real Estate Closings',
    description: 'Smooth real estate transactions from start to finish',
    icon: faBuilding,
  },
  {
    name: 'Foreclosure Defense',
    description: 'Protecting your home and financial future',
    icon: faHome,
  },
  {
    name: 'Commercial Transactions',
    description: 'Helping you navigate through complex business deals',
    icon: faBook,
  },
  {
    name: 'Estate Planning',
    description: 'Securing and future-proofing your assets',
    icon: faLandmark,
  },
  {
    name: 'Business Buy/Sell/Transfer',
    description: 'Guiding your business transitions seamlessly',
    icon: faBriefcase,
  },
  {
    name: 'Uncontested Divorces',
    description: 'Efficient and civil divorce resolutions',
    icon: faHeart,
  },
]

export const Practices = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Capabilities
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Our Practice Areas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            At DELGADO LEGAL, P.A. we offer full-service legal expertise and services. From handling
            real estate transactions to assisting with uncontested divorces.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <FontAwesomeIcon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                      icon={feature.icon}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
