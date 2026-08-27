import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

type Entry = {
  period: string
  title: string
  org: string
  points: string[]
  kind: 'work' | 'edu' | 'cert'
}

const entries: Entry[] = [
  {
    period: '2022 — 2026',
    title: 'B.Tech, Computer Science',
    org: 'SRM University AP',
    kind: 'edu',
    points: [
      'Core focus on Python, SQL, DSA, and software development.',
      'Building database-driven and data analysis projects.',
    ],
  },
  {
    period: 'Internship',
    title: 'UI/UX Prototype Intern',
    org: 'SRM University AP',
    kind: 'work',
    points: [
      'Built an interactive campus navigation prototype across 10+ locations.',
      'Optimized workflows across 10 departments, cutting paperwork by 75%.',
      'Collaborated with a 3+ member team to enhance system usability.',
    ],
  },
  {
    period: 'Certifications',
    title: 'AWS & MongoDB',
    org: 'Cloud Game Dev · Node.js Developer Path',
    kind: 'cert',
    points: [
      'AWS Cloud Game Development.',
      'MongoDB Node.js Developer Path.',
    ],
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>EXPERIENCE &amp; JOURNEY</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            The path so far
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="group grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift md:grid-cols-[0.4fr_1fr] md:gap-8 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-gradient" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{e.org}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
