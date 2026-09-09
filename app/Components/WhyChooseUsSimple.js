'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

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
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };
  const hidden = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24 };

  return (
    <section className="bg-white px-4 py-12 font-sans text-[#05265e] sm:px-6 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={hidden}
          whileInView={reveal}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.p
            className="section-label mx-auto rounded-full bg-[#ff5b12] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            initial={hidden}
            whileInView={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Why Taerg
          </motion.p>
          <motion.h2
            className="section-topic mt-2 text-[#05265e]"
            initial={hidden}
            whileInView={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08 }}
          >
            Why Choose Taerg
          </motion.h2>
          <motion.p
            className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
            initial={hidden}
            whileInView={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.16 }}
          >
            Reliable campus laundry solutions that are easy for students and
            simple for institutions to manage.
          </motion.p>
        </motion.header>

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.number}
              className="grid gap-5 py-7 sm:grid-cols-[1fr_260px] sm:items-center sm:gap-6 lg:grid-cols-2 lg:gap-10 lg:py-9"
              initial={hidden}
              whileInView={reveal}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                className="flex gap-4 sm:gap-6"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08 }}
              >
                <motion.span
                  className="pt-1 text-base font-semibold text-[#ff5b12] lg:text-lg"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                >
                  {reason.number}
                </motion.span>
                <div>
                  <h3 className="text-2xl font-semibold leading-snug lg:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600 lg:text-lg">
                    {reason.description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-100"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.12 }}
              >
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 240px, 360px"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
