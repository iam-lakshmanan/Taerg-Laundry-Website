import Image from 'next/image';

const reasons = [
  {
    number: '01',
    title: 'Dedicated Campus Infrastructure',
    description:
      'Purpose-built laundry centres designed for educational institutions and integrated into the campus environment.',
    image: '/images/whychooseimg.png',
    alt: 'Taerg campus laundry centre serving a student',
  },
  {
    number: '02',
    title: 'Managed Pickup & Delivery',
    description:
      'Scheduled collection and dependable delivery built around student routines, reducing queues and delays.',
    image: '/images/ourprocessimg2.png',
    alt: 'Taerg team collecting laundry from students on campus',
  },
  {
    number: '03',
    title: 'Student-First Convenience',
    description:
      'A simple, hygienic and reliable service that gives students more time to focus on campus life.',
    image: '/images/ourprocessimg1.png',
    alt: 'Student preparing laundry for the Taerg campus service',
  },
];

export default function WhyChooseUsSimple() {
  return (
    <section className="bg-white px-4 py-12 font-sans text-[#0a1b3d] sm:px-6 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#245da6]">
            Why Taerg
          </p>
          <h2 className="section-topic mt-2 text-[#0a1b3d]">Why Choose Taerg</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Reliable campus laundry solutions that are easy for students and
            simple for institutions to manage.
          </p>
        </header>

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className="grid gap-5 py-6 sm:grid-cols-[1fr_240px] sm:items-center sm:gap-8 lg:grid-cols-[1fr_360px] lg:py-8"
            >
              <div className="flex gap-4 sm:gap-6">
                <span className="pt-1 text-sm font-semibold text-[#245da6]">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 240px, 360px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
