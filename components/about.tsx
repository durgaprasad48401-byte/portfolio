import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>ABOUT</SectionLabel>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              I like the part where messy data becomes a{' '}
              <span className="text-gradient">clear answer</span>.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                I&apos;m a final-year Computer Science undergraduate at SRM
                University AP with a strong foundation in Python, SQL,
                object-oriented programming, and data structures. Most of my
                work lives where databases, APIs, and a bit of machine learning
                meet.
              </p>
              <p>
                I&apos;ve built an AI resume screening system, a relational bus
                management platform, and a full-stack e-commerce app — always
                chasing solutions that are scalable, measurable, and genuinely
                useful. I&apos;m especially drawn to AI, automation, and cloud
                technologies.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
