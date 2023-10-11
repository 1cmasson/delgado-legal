import Image from 'next/image'

const testimonials = [
  {
    body: 'Micheal, you helped big time. I haven’t forgotten about you and what I have these types of sellers will always keep you 1st in line. Thank you kindly.',
    author: {
      name: 'Brenda A.',
      role: 'Real Estate Agent'
    },
  },
  {
    body: 'First time I see an attorney bend over backwards for everyone involved in the transaction, I will keep in mind the way you work. Congratulations!',
    author: {
      name: 'Amada C.',
      role: 'Realtor',
    },
  },
  {
    body: 'Thank you for being the BEST partner any realtor can ask for. You are amazing! Your professionalism and hard work is like non other. You remain in full control of the deal at all times. I can’t thank you enough!',
    author: {
      name: 'Estrella P.',
      role: 'Realtor',
    },
  },
  {
    body: 'Micheal… just a quick note to say Thank You for all your support during this process… 5 star service!!!',
    author: {
      name: 'A.T',
      role: 'Buyer',
    },
  },
  {
    body: 'You are the best!!! Can’t thank you enough for everything!',
    author: {
      name: 'Gretel M.',
      role: 'Buyer',
    },
  },
  {
    body: 'You are professional, thorough, and caring! It was great working with you!',
    author: {
      name: 'Aymee F.',
      role: 'Buyer',
    },
  },
  {
    body: 'Thank you for making this a quick and painless process. You guys did a great job!',
    author: {
      name: 'Carlos R.',
      role: 'Buyer',
    },
  },
  {
    body: 'Thank you again for everything. I’m so glad we met years ago and we’ve been able to work together and you were able to help... So diligently… efficiently… professional, just amazing!',
    author: {
      name: 'Katie M.',
      role: 'Buyer',
    },
  },
  
]

export const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            What Our Clients Say About Us
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
