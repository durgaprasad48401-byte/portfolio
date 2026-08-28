'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ArrowDown } from 'lucide-react'

const prototypeUrl = 'https://bass-chain-20442454.figma.site/'

const images = [
  {
    src: '/srm/campus.png',
    title: 'Campus Overview',
    label: '01 / CAMPUS',
  },
  {
    src: '/srm/main.jpg',
    title: 'Main Academic Campus',
    label: '02 / CAMPUS',
  },
  {
    src: '/srm/s-block.jpg',
    title: 'S Block',
    label: '03 / LOCATION',
  },
  {
    src: '/srm/w-block.jpg',
    title: 'W Block',
    label: '04 / LOCATION',
  },
  {
    src: '/srm/auditorium.png',
    title: 'Auditorium',
    label: '05 / FACILITY',
  },
  {
    src: '/srm/food-court.png',
    title: 'Food Court',
    label: '06 / FACILITY',
  },
]

export default function SRMNavigationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0b0b0b]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          <Link
            href="/"
            className="font-mono text-sm font-bold"
          >
            DP<span className="text-[#0052ff]">.</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={15} />
            Back to work
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-end gap-12 lg:grid-cols-12">

            {/* Hero Text */}
            <div className="lg:col-span-7">

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
                UI/UX Internship · SRM University-AP
              </p>

              <h1 className="mt-8 text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-[8.5rem]">
                Campus
                <br />
                Navigation
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
                Designing a clearer way for students to discover locations,
                navigate the campus, and access useful information without
                unnecessary confusion.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">

                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0052ff] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  View Project Demo

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <span className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 font-mono text-xs">
                  Figma · UI/UX
                </span>

              </div>

            </div>


            {/* Hero Image */}
            <div className="lg:col-span-5">

              <div className="group relative overflow-hidden rounded-[2rem] bg-black">

                <img
                  src="/srm/campus.png"
                  alt="SRM University campus overview"
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                      SRM University-AP
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                      Campus / 01
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* Scroll indicator */}
          <div className="mt-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
            <ArrowDown size={14} />
            Explore case study
          </div>

        </div>
      </section>


      {/* PROJECT INFO */}
      <section className="border-y border-black/10 bg-[#0b0b0b] px-6 py-20 text-white md:px-10 md:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Project
            </p>

            <p className="mt-4 text-lg">
              Campus Navigation
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Role
            </p>

            <p className="mt-4 text-lg">
              UI/UX Intern
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Tools
            </p>

            <p className="mt-4 text-lg">
              Figma · Prototyping · User Flow
            </p>
          </div>

        </div>

      </section>


      {/* PROBLEM */}
      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
              01 · Problem
            </p>

          </div>

          <div className="md:col-span-8">

            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Finding places around campus should be simple.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/55">
              Students may know the destination they need to reach, but
              finding the right building, block, or location can become
              difficult when campus information is spread across different
              sources.
            </p>

          </div>

        </div>

      </section>


      {/* RESEARCH */}
      <section className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
              02 · Research
            </p>

          </div>

          <div className="md:col-span-8">

            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Understanding how students navigate.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/55">
              The research focused on understanding student navigation
              behaviour and the information they need when searching for
              places around campus.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-black/10 p-6 transition-all hover:border-[#0052ff]/40">

                <span className="font-mono text-xs text-[#0052ff]">
                  INSIGHT 01
                </span>

                <p className="mt-4 text-lg">
                  Students need quick access to destination information.
                </p>

              </div>

              <div className="rounded-2xl border border-black/10 p-6 transition-all hover:border-[#0052ff]/40">

                <span className="font-mono text-xs text-[#0052ff]">
                  INSIGHT 02
                </span>

                <p className="mt-4 text-lg">
                  Navigation should require minimal effort.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* DESIGN GOAL */}
      <section className="bg-[#0052ff] px-6 py-24 text-white md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            03 · Design Goal
          </p>

          <h2 className="mt-10 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Make campus navigation
            <br />
            clear, fast and intuitive.
          </h2>

        </div>

      </section>


      {/* USER FLOW */}
      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
            04 · User Flow
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            From searching to reaching the destination.
          </h2>

          <div className="mt-16 grid gap-3 md:grid-cols-7">

            {[
              'Explore',
              'Search',
              'Select Location',
              'View Details',
              'Get Directions',
              'Start Navigation',
              'Reach Destination',
            ].map((step, index) => (

              <div
                key={step}
                className="rounded-2xl border border-black/10 p-5 transition-all hover:-translate-y-1 hover:border-[#0052ff]/40"
              >

                <span className="font-mono text-xs text-[#0052ff]">
                  0{index + 1}
                </span>

                <p className="mt-8 text-sm font-medium">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* VISUAL EXPLORATION */}
      <section className="border-t border-black/10 bg-[#111111] px-6 py-24 text-white md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4d7cff]">
                05 · Visual Exploration
              </p>

              <h2 className="mt-8 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                Designing around the real campus.
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              The experience is grounded in real campus locations,
              buildings and facilities to make navigation feel familiar
              and useful.
            </p>

          </div>


          {/* Main image */}
          <div className="group relative mt-16 overflow-hidden rounded-[2rem]">

            <img
              src="/srm/main.jpg"
              alt="SRM University main campus"
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:h-[650px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">

              <div className="flex items-end justify-between">

                <div>

                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    02 / CAMPUS
                  </p>

                  <h3 className="mt-2 text-2xl font-medium">
                    Main Academic Campus
                  </h3>

                </div>

              </div>

            </div>

          </div>


          {/* Image grid */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {images.slice(2).map((image) => (

              <div
                key={image.src}
                className="group overflow-hidden rounded-[1.75rem] bg-[#1b1b1b]"
              >

                <div className="overflow-hidden">

                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[460px]"
                  />

                </div>

                <div className="flex items-center justify-between p-6">

                  <div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4d7cff]">
                      {image.label}
                    </p>

                    <h3 className="mt-2 text-xl font-medium">
                      {image.title}
                    </h3>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SOLUTION */}
      <section className="border-t border-black/10 bg-[#eeeeeb] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
              06 · Solution
            </p>

          </div>

          <div className="md:col-span-8">

            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              A focused navigation experience.
            </h2>

            <div className="mt-12 space-y-4">

              {[
                'Search for campus destinations',
                'View relevant location information',
                'Get clear directions',
                'Start navigation with minimal steps',
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-5 border-t border-black/10 py-5"
                >

                  <span className="font-mono text-xs text-[#0052ff]">
                    0{index + 1}
                  </span>

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* PROTOTYPE */}
      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#0b0b0b] text-white">

            <div className="grid items-center gap-12 p-8 md:p-16 lg:grid-cols-2">

              <div>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4d7cff]">
                  07 · Interactive Prototype
                </p>

                <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  Explore the project yourself.
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-white/50">
                  Open the interactive prototype to experience the navigation
                  concept and explore the designed user flow.
                </p>

                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Open Interactive Demo
                  <ArrowUpRight size={16} />
                </a>

              </div>


              {/* Prototype visual */}
              <div className="relative">

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">

                  <div className="rounded-xl bg-[#f7f7f5] p-4">

                    <div className="flex items-center justify-between border-b border-black/10 pb-4">

                      <div className="h-3 w-24 rounded-full bg-black/80" />

                      <div className="h-3 w-12 rounded-full bg-black/10" />

                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">

                      <div className="h-32 rounded-xl bg-black/5" />
                      <div className="h-32 rounded-xl bg-[#0052ff]/15" />

                    </div>

                    <div className="mt-3 h-16 rounded-xl bg-black/5" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl text-center">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0052ff]">
            See the full experience
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Explore Campus Navigation.
          </h2>

          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0052ff] px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            View Project Demo
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 Durga Prasad
          </span>

          <Link
            href="/"
            className="transition-colors hover:text-black"
          >
            Back to portfolio ↑
          </Link>

        </div>

      </footer>

    </main>
  )
}