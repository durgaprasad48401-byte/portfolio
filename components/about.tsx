import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

const facts = [
  { value: '3+', label: 'Full-stack projects shipped' },
  { value: '10k+', label: 'Text records processed' },
  { value: '75%', label: 'Paperwork reduced in intern work' },
]

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>ABOUT</SectionLabel>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
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

          <Reveal delay={0.12}>
            <div className="grid gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="font-display text-4xl text-gradient">
                    {f.value}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
