import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { Code, Database, BrainCircuit, Layers } from 'lucide-react'

const groups = [
  {
    icon: Code,
    title: 'Languages',
    items: ['C', 'Python', 'JavaScript'],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['SQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: BrainCircuit,
    title: 'AI / ML',
    items: ['ML fundamentals', 'Data preprocessing', 'NumPy', 'Pandas'],
  },
  {
    icon: Layers,
    title: 'Concepts',
    items: ['Database design', 'REST APIs', 'SDLC', 'DSA'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>SKILLS &amp; TECHNOLOGIES</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            The toolkit I reach for
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-accent transition-transform group-hover:scale-110">
                  <g.icon size={20} />
                </div>
                <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
