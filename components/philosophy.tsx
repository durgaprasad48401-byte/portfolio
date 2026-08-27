import { Reveal } from '@/components/reveal'

const stats = [
  { value: '25+', label: 'SQL queries authored' },
  { value: '50+', label: 'technical skills automated' },
  { value: '5s', label: 'to rank 100 resumes' },
  { value: '10+', label: 'REST APIs built' },
]

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-[color:var(--background)] md:py-32">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="glow-blue pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 opacity-40"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent-2)]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent-gradient"
            />
            PHILOSOPHY
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-4xl font-display text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-5xl">
            Good software isn&apos;t just code that runs — it&apos;s a{' '}
            <span className="text-gradient">measurable outcome</span>. I optimize
            for accuracy, speed, and clarity, and I let the numbers tell the
            story.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.06}>
              <div>
                <div className="font-display text-4xl text-gradient sm:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
