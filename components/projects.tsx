'use client'

import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  tag: string
  featured?: boolean
  description: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'AI Resume Screening System',
    tag: 'AI / NLP',
    featured: true,
    description:
      'An NLP-driven screening engine that analyzes and ranks candidates using TF-IDF and cosine similarity, automating skill extraction and generating ranked reports in seconds.',
    stack: ['Python', 'Flask', 'Pandas', 'Scikit-learn', 'NumPy'],
    metrics: [
      { value: '90%', label: 'match accuracy' },
      { value: '200+', label: 'resumes analyzed' },
      { value: '70%', label: 'less manual time' },
    ],
  },
  {
    name: 'Bus Management System',
    tag: 'Databases',
    description:
      'A relational platform managing student records, bookings, and routes with role-based access for admins, students, and drivers.',
    stack: ['MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: [
      { value: '8+', label: 'tables designed' },
      { value: '600+', label: 'student records' },
      { value: '35%', label: 'faster retrieval' },
    ],
  },
  {
    name: 'E-Commerce Web App',
    tag: 'Web Development',
    description:
        'A full-stack e-commerce web application featuring responsive design, dynamic products, category filtering, search, shopping cart, and checkout functionality.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    metrics: [
        { value: '6+', label: 'products' },
        { value: '4', label: 'categories' },
        { value: '1', label: 'live deployment' },
    ],
    liveUrl: 'https://durga-store-production.up.railway.app/',
    githubUrl: 'https://github.com/durgaprasad8401-byte/durga-store',
},
]

export function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>FEATURED PROJECTS</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
                Things I&apos;ve designed, built, and shipped
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  // Asymmetric layout: featured spans full width, others split
  const span = project.featured ? 'lg:col-span-6' : 'lg:col-span-3'

  return (
    <Reveal delay={index * 0.08} className={span}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
          project.featured
            ? 'gradient-border shadow-lift'
            : 'border border-border bg-card shadow-soft hover:shadow-lift'
        }`}
      >
        {project.featured && (
          <div
            aria-hidden="true"
            className="glow-blue pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-60"
          />
        )}

        <div className="relative flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {project.tag}
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-all group-hover:border-accent group-hover:text-accent">
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <div
          className={`relative mt-6 flex flex-1 flex-col ${
            project.featured ? 'lg:max-w-2xl' : ''
          }`}
        >
          <h3
            className={`font-display tracking-tight text-balance ${
              project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}
