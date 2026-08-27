import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-3xl p-8 shadow-lift sm:p-12 md:p-16">
            <div
              aria-hidden="true"
              className="glow-blue pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 opacity-60"
            />
            <div className="relative">
              <SectionLabel>CONTACT</SectionLabel>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something{' '}
                <span className="text-gradient">worth measuring</span>.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Open to internships, full-time roles, and collaborations in
                software development, data, and AI. Reach out — I reply fast.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:durgaprasad48401@gmail.com"
                  className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-accent-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <Mail size={18} />
                  durgaprasad48401@gmail.com
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="tel:+919391240438"
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground shadow-soft transition-colors hover:bg-muted"
                >
                  <Phone size={17} />
                  +91 93912 40438
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
