'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { About } from '../../components/About';
import { Team } from '../../components/Team';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { label: 'Successful Cases Handled', value: '100+' },
  { label: 'Years Of Legal Excellence', value: 'Over 15' },
  { label: 'Client Satisfaction Rate', value: '98%' },
]

const values = [
  {
    name: 'Client-Centric Approach',
    description:
      'Putting our clients first is the cornerstone of our practice. We prioritize your needs and goals, ensuring that every solution is tailored to your unique situation.',
  },
  {
    name: 'Integrity and Ethics',
    description:
      'We uphold the highest ethical standards in our legal practice. Trust, honesty, and transparency are at the core of everything we do.',
  },
  {
    name: 'Excellence in Advocacy',
    description:
      'We strive for excellence in every case. Our team is dedicated to providing top-tier legal representation, no matter the complexity of the matter.',
  },
  {
    name: 'Legal Expertise',
    description:
      'With deep knowledge and extensive experience in various practice areas, our attorneys are equipped to tackle the toughest legal challenges.',
  },
  {
    name: 'Personalized Service',
    description:
      "We understand that each client's situation is unique. We provide personalized attention, ensuring that you receive the guidance and support you need.",
  },
  {
    name: 'Community Engagement',
    description:
      'We believe in giving back to the community. Our commitment extends beyond the courtroom as we actively engage in community events and initiatives.',
  },
]
const team = [
  {
    name: 'Vanessa Delgado',
    role: 'Co-Founder / Attorney',
    imageUrl:
      '/Vanessa.svg',
  },
  // More people...
]


const App = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
      <div className="bg-white">
      {/* Header */}
      <Banner />
      <Navigation />
      <Header title="Our Firm"/>

      <main className="isolate">
        
        {/* Content section */}
        <div className='my-24'>
          <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our mission</h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-lg leading-8 relative mt-6 text-gray-600 sm:max">
                  At DELGADO LEGAL, P.A., our mission is to provide legal support and guidance to our clients and help them navigate complex legal challenges
                  with confidence. We are committed to delivering high quality legal
                  services that prioritize our clients' interests, ensuring their rights are protected, and their goals are achieved. Our
                  mission is not just about practicing law; it's about making a positive impact on the lives of those we serve, one case at a time.
                  </p>
                  </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                        <dt className="text-base leading-7 text-primary">{stat.label}</dt>
                        <dd className="text-5xl font-semibold tracking-tight text-secondary">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="/background-about.svg"
            alt=""
            width={200}
            height={200}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-primary">
            At DELGADO LEGAL, P.A., our values define who we are and how we serve our clients. They represent our commitment, integrity, and client-centric approach.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-secondary">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <Team />

      {/* Footer */}
      </main>
      <Footer/>
    </div>
    )
}

export default App;
