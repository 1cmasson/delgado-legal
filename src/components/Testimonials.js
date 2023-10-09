import Image from 'next/image'

const testimonials = [
  {
    body: 'DELGADO LEGAL, P.A. is a treasure trove of legal expertise! Their dedication and passion for all things legal are palpable. If you appreciate fine legal service, look no further. These guys are the epitome of legal brilliance.',
    author: {
      name: 'Alex R.',
      handle: 'lesliealexander',
      imageUrl:
        '/Alex-R.webp',
    },
  },
  {
    body: 'Kudos to DELGADO LEGAL, P.A. for helping kickstart my business with a solid LLC setup! They were fast, friendly, and full of useful info. Starting a business is exciting, and they made it even more so. Here\'s to smooth beginnings!',
    author: {
      name: 'Christina L.',
      handle: 'lesliealexander',
      imageUrl:
        '/Christina-Lauren.webp',
    },
  },
  {
    body: 'DELGADO LEGAL, P.A. helped us plan for our family\'s future. Their expertise in wills, trusts, and probates is amazing. They really cared about making sure our family is taken care of. If family matters to you, these are the folks to turn to.',
    author: {
      name: 'David R.',
      handle: 'lesliealexander',
      imageUrl:
        '/David-R.webp',
    },
  },
  {
    body: 'Selling my home was a breeze with DELGADO LEGAL, P.A. Their understanding of real estate made the journey stress-free. Trustworthy, efficient, and super friendly. If you\'re selling your home, they\'ve got your back!',
    author: {
      name: 'Linda M.',
      handle: 'lesliealexander',
      imageUrl:
        '/Linda-M.webp',
    },
  },
  {
    body: 'Working with DELGADO LEGAL, P.A. was a game-changer! Their expertise in real estate and commercial law is top-notch. The whole process was seamless and professional. If you\'re serious about your business, these folks are the real deal.',
    author: {
      name: 'John D.',
      handle: 'lesliealexander',
      imageUrl:
        '/John-D.webp',
    },
  }
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
                    <Image
                      width={200}
                      height={200}
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
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
