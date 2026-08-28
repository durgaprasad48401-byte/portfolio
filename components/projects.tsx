'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  tag: string
  featured?: boolean
  description: string
  stack: string[]
  metrics?: {
    value: string
    label: string
  }[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

const projects: Project[] = [
  // ==========================================
  // DURGA STORE
  // ==========================================
  {
    name: 'Durga Store',
    tag: 'Web Development',
    featured: true,
    image: '/durga-store.png',

    description:
      'A full-stack e-commerce web application built with HTML, CSS, JavaScript, Node.js, Express, and MySQL. Features dynamic product loading, REST API integration, category filtering, search, shopping cart management, and checkout functionality.',

    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MySQL',
    ],

    metrics: [
      { value: '6+', label: 'products' },
      { value: '4', label: 'categories' },
      { value: 'Live', label: 'deployment' },
    ],

    liveUrl:
      'https://durga-store-production.up.railway.app/',

    githubUrl:
      'https://github.com/durgaprasad48401-byte/durga-store',
  },

  // ==========================================
  // SRM UI/UX INTERNSHIP
  // ==========================================
  {
    name: 'Campus Navigation',
    tag: 'UI/UX Internship · SRM University-AP',

    description:
      'An interactive campus navigation and information experience designed during my UI/UX internship at SRM University-AP, focusing on clearer location discovery and navigation.',

    stack: [
      'Figma',
      'UI/UX',
      'Prototyping',
      'User Flow',
    ],

    metrics: [
      { value: 'UI/UX', label: 'internship' },
      { value: 'Figma', label: 'prototype' },
      { value: 'SRM AP', label: 'organization' },
    ],

    liveUrl:
      '/projects/srm-navigation',
  },

  // ==========================================
  // AI RESUME SCREENING
  // ==========================================
  {
    name: 'AI Resume Screening System',
    tag: 'AI / NLP',

    description:
      'An NLP-based application that analyzes resumes and compares candidate profiles using TF-IDF and cosine similarity to identify relevant skills and rank candidates.',

    stack: [
      'Python',
      'Flask',
      'Pandas',
      'Scikit-learn',
      'NumPy',
    ],

    metrics: [
      { value: 'TF-IDF', label: 'text analysis' },
      { value: 'Cosine', label: 'similarity' },
      { value: 'NLP', label: 'technology' },
    ],
  },

  // ==========================================
  // BUS MANAGEMENT SYSTEM
  // ==========================================
  {
    name: 'Bus Management System',
    tag: 'Databases',

    description:
      'A database-driven system designed to manage student information, bus routes, bookings, and user access through a structured MySQL database.',

    stack: [
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    metrics: [
      { value: 'MySQL', label: 'database' },
      { value: 'CRUD', label: 'operations' },
      { value: '3', label: 'user roles' },
    ],
  },
]

export function Projects() {
  return (
    <section
      id="work"
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">

            <div>
              <SectionLabel>
                SELECTED WORK
              </SectionLabel>

              <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
                Things I&apos;ve designed, built, and shipped
              </h2>
            </div>

          </div>
        </Reveal>


        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
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

  const span = project.featured
    ? 'lg:col-span-6'
    : 'lg:col-span-3'

  const cardContent = (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
        project.featured
          ? 'gradient-border shadow-lift'
          : 'border border-border bg-card shadow-soft hover:shadow-lift'
      }`}
    >

      {/* Project Image */}
      {project.image && (
        <div className="relative overflow-hidden border-b border-border">

          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="block h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] md:h-96"
          />

        </div>
      )}


      {/* Card Content */}
      <div className="relative flex flex-1 flex-col p-7 md:p-8">

        {/* Featured Glow */}
        {project.featured && (
          <div
            aria-hidden="true"
            className="glow-blue pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-60"
          />
        )}


        {/* Project Header */}
        <div className="relative flex items-center justify-between">

          <span className="max-w-[80%] font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {project.tag}
          </span>

          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-all group-hover:border-accent group-hover:text-accent">

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </span>

        </div>


        {/* Project Information */}
        <div
          className={`relative mt-6 flex flex-1 flex-col ${
            project.featured
              ? 'lg:max-w-3xl'
              : ''
          }`}
        >

          {/* Project Name */}
          <h3
            className={`font-display tracking-tight text-balance ${
              project.featured
                ? 'text-2xl sm:text-3xl'
                : 'text-xl sm:text-2xl'
            }`}
          >
            {project.name}
          </h3>


          {/* Description */}
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>


          {/* Technologies */}
          <ul className="mt-6 flex flex-wrap gap-2">

            {project.stack.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}

          </ul>


          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6">

              {project.metrics.map((metric) => (
                <div key={metric.label}>

                  <div className="font-display text-lg tracking-tight sm:text-xl">
                    {metric.value}
                  </div>

                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs">
                    {metric.label}
                  </div>

                </div>
              ))}

            </div>
          )}


          {/* Project Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Live / Project Link */}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  aria-label={`View ${project.name}`}
                  className="group/link inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0052FF] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4D7CFF] hover:shadow-lg"
                >
                  {project.name === 'Campus Navigation'
                    ? 'View Case Study'
                    : 'Live Demo'}

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              )}


              {/* GitHub */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="group/link inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0052FF] hover:text-[#0052FF]"
                >
                  GitHub

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              )}

            </div>
          )}

        </div>

      </div>

    </article>
  )


  return (
    <Reveal
      delay={index * 0.08}
      className={span}
    >
      {cardContent}
    </Reveal>
  )
}