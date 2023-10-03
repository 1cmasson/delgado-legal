import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What types of cases do you handle?',
    answer:
      "We handle a wide range of cases, including real estate transactions, estate planning, business law, family law, and more. If you have a legal matter, don't hesitate to reach out to discuss your specific needs.",
  },
  {
    question: 'How do your fees work?',
    answer:
      'Our fee structure varies depending on the type of legal service you require. We offer transparent billing and can discuss our pricing during your initial consultation.',
  },
  {
    question: "What's the difference between a contested and uncontested divorce?",
    answer:
      'In a contested divorce, spouses have disagreements that require resolution by a court. In an uncontested divorce, both parties agree on all key issues, making the process faster and less adversarial.',
  },
  {
    question: 'How long does it take to close a real estate transaction?',
    answer:
      'The timeline can vary based on factors like the complexity of the transaction and legal requirements. We will be able to give you an expected timeline during your initial consultation.',
  },
  {
    question: 'What documents do I need for estate planning?',
    answer:
      "Estate planning typically involves documents like wills, trusts, power of attorney, and healthcare directives. We'll help you determine which documents are necessary for your unique situation.",
  },
  {
    question: 'Can you help with business formations and contracts?',
    answer:
      'Yes, we assist with forming new businesses, drafting contracts, and providing legal guidance.',
  },
  {
    question: 'Do I need an attorney for a simple real estate transaction?',
    answer:
      'You might not always need an attorney. But keep in mind that legal nuances can arise any time, and having an attorney can help you navigate potential issues and ensure a smooth process.',
  },
  {
    question: 'How can I schedule a consultation with your firm?',
    answer:
      "You can schedule a consultation by contacting our office via phone, email, or filling the form on the contact page. We'll be happy to set up an appointment to discuss your legal needs.",
  },
  {
    question: 'What should I bring to my initial consultation?',
    answer:
      "For an initial consultation, it's helpful to bring any relevant documents related to your case, such as contracts, legal notices, or correspondence. This will allow us to better assess your situation.",
  },
]

export const FAQ = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
