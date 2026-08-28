'use client'

import { ArrowUpRight, Menu } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    number: '01',
    tag: 'UI/UX INTERNSHIP',
    title: (
      <>
        Campus
        <br />
        Navigation
      </>
    ),
    description:
      'An interactive campus navigation experience designed during my UI/UX internship at SRM University-AP, focused on helping students discover campus locations, facilities and routes more easily.',
    href: '/projects/srm-navigation',
    type: 'case-study',
  },
  {
    number: '02',
    tag: 'PRODUCT / WEB',
    title: (
      <>
        Durga
        <br />
        Store
      </>
    ),
    description:
      'A full-stack e-commerce application designed and developed with product discovery, category filtering, search, cart management and checkout functionality.',
    href: 'https://durga-store-production.up.railway.app/',
    type: 'external',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0b0b0b]">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-tight"
          >
            DP<span className="text-[#0052ff]">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#work"
              className="transition-opacity hover:opacity-50"
            >
              Work
            </a>

            <a
              href="#about"
              className="transition-opacity hover:opacity-50"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#0b0b0b] px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 md:block"
          >
            Let&apos;s talk ↗
          </a>

          <button
            aria-label="Open menu"
            className="md:hidden"
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 pb-20 pt-32 md:px-10">

        <div className="mx-auto w-full max-w-7xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0052ff]" />

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">
              UI/UX Intern · Web Developer
            </span>
          </div>

          <h1 className="max-w-6xl text-[clamp(4rem,10vw,9rem)] font-black leading-[0.86] tracking-[-0.07em]">

            DESIGNING
            <br />

            DIGITAL
            <br />

            <span className="text-[#0052ff]">
              EXPERIENCES.
            </span>

          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/10 pt-8 md:flex-row md:items-end">

            <p className="max-w-xl text-lg leading-relaxed text-black/60">
              I&apos;m Durga Prasad — a Computer Science student and
              UI/UX intern who enjoys turning ideas into clear
              interfaces and functional digital products.
            </p>

            <a
              href="#work"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0052ff] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore my work

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>

      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-t border-black/10 bg-[#0b0b0b] px-6 py-24 text-white md:px-10 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mb-20 flex items-end justify-between">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Selected Work
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                Designing.
                <br />
                Building.
                <br />
                Shipping.
              </h2>
            </div>

            <span className="hidden font-mono text-xs text-white/30 md:block">
              02 PROJECTS
            </span>

          </div>

          {/* PROJECTS */}
          <div>

            {projects.map((project) => {

              const content = (
                <div className="grid gap-10 md:grid-cols-12 md:items-center">

                  {/* NUMBER */}
                  <div className="md:col-span-1">

                    <span className="font-mono text-xs text-white/40">
                      {project.number}
                    </span>

                  </div>

                  {/* PROJECT TEXT */}
                  <div className="md:col-span-7">

                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#4d7cff]">
                      {project.tag}
                    </p>

                    <h3 className="text-4xl font-bold tracking-[-0.04em] transition-colors group-hover:text-[#4d7cff] md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-lg leading-relaxed text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 transition-colors group-hover:text-white">

                      {project.type === 'case-study'
                        ? 'View case study'
                        : 'View live project'}

                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                  {/* PROJECT VISUAL */}
                  <div className="md:col-span-4">

                    {/* SRM UI/UX PROJECT */}
                    {project.type === 'case-study' ? (

                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#171717] transition-transform duration-500 group-hover:-translate-y-2">

                        <img
                          src="/srm/main.jpg"
                          alt="SRM University campus navigation UI/UX project"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-[9px] text-white/80 backdrop-blur-md">
                          UI/UX · SRM AP
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">

                          <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">
                            Internship Project
                          </span>

                        </div>

                      </div>

                    ) : (

                      /* DURGA STORE IMAGE */
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e8e5] transition-transform duration-500 group-hover:-translate-y-2">

                        <img
                          src="/durga-store.png"
                          alt="Durga Store e-commerce web application"
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 font-mono text-[9px] text-white backdrop-blur-md">
                          WEB · E-COMMERCE
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">

                          <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">
                            Full-stack project
                          </span>

                        </div>

                      </div>

                    )}

                  </div>

                </div>
              )

              {/* INTERNAL CASE STUDY */}
              if (project.type === 'case-study') {

                return (
                  <Link
                    key={project.number}
                    href={project.href}
                    className="group block border-t border-white/15 py-10"
                  >
                    {content}
                  </Link>
                )

              }

              {/* EXTERNAL PROJECT */}
              return (
                <a
                  key={project.number}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/15 py-10"
                >
                  {content}
                </a>
              )

            })}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
              About
            </p>

          </div>

          <div className="md:col-span-8">

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              I like turning complex problems into simple experiences.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/55">
              My background in Computer Science helps me approach
              design with both creativity and technical understanding.
              I enjoy working across UX, visual design and development
              to create practical digital products.
            </p>

            <div className="mt-12 flex flex-wrap gap-2">

              {[
                'UI Design',
                'UX Design',
                'Wireframing',
                'Prototyping',
                'User Flows',
                'Figma',
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Next.js',
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-black/10 px-4 py-2 font-mono text-xs"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-black/10 bg-[#0052ff] px-6 py-24 text-white md:px-10 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>

          <h2 className="mt-8 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            USEFUL.
          </h2>

          <div className="mt-16 flex flex-wrap gap-4">

            <a
              href="mailto:durgaprasad48401@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-1"
            >
              Email me ↗
            </a>

            <a
              href="https://github.com/durgaprasad48401-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-1"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0b] px-6 py-8 text-white md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 font-mono text-xs text-white/40 md:flex-row">

          <span>
            © 2026 Durga Prasad
          </span>

          <span>
            UI/UX · WEB · PRODUCT
          </span>

        </div>

      </footer>

    </main>
  )
}