'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const stack = ['Python', 'SQL', 'JavaScript', 'Node.js', 'Flask']

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* background texture + glow */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="glow-blue pointer-events-none absolute -right-40 -top-24 h-[32rem] w-[32rem] opacity-70"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-gradient" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building software that
            <br className="hidden sm:block" /> turns data into{' '}
            <span className="text-gradient">decisions</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            I&apos;m{' '}
            <span className="font-medium text-foreground">
              Durga Prasad
            </span>{' '}
            — a Computer Science engineer crafting database-driven applications,
            AI screening systems, and scalable full-stack products with Python,
            SQL, and Node.js.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-soft transition-colors hover:bg-muted"
            >
              <Download size={17} />
              Résumé
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Durgathekondagalla"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/durga-prasad-kondagalla"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <p className="font-mono text-xs text-muted-foreground">
              SRM University AP · B.Tech CSE ’26
            </p>
          </motion.div>
        </motion.div>

        {/* Abstract developer graphic */}
        <HeroGraphic stack={stack} />
      </div>
    </section>
  )
}

function HeroGraphic({ stack }: { stack: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
    >
      {/* slow rotating ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute inset-6 rounded-full border border-dashed border-border"
      />
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute inset-16 rounded-full border border-border [animation-direction:reverse] [animation-duration:40s]"
      />

      {/* core card */}
      <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2">
        <div className="gradient-border rounded-2xl p-5 shadow-lift">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          </div>
          <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground">
            <code>
              <span className="text-accent">def</span> build():{'\n'}
              {'  '}data = clean(raw){'\n'}
              {'  '}model = rank(data){'\n'}
              {'  '}
              <span className="text-accent">return</span>{' '}
              <span className="text-foreground">ship</span>(model)
            </code>
          </pre>
        </div>
      </div>

      {/* floating chips */}
      <div className="animate-float absolute left-0 top-10 rounded-xl border border-border bg-card px-3.5 py-2 font-mono text-xs shadow-soft">
        <span className="text-gradient font-semibold">90%</span> match accuracy
      </div>
      <div className="animate-float-delayed absolute bottom-12 right-0 rounded-xl border border-border bg-card px-3.5 py-2 font-mono text-xs shadow-soft">
        200+ resumes parsed
      </div>
      <div className="animate-float absolute bottom-4 left-8 rounded-xl border border-border bg-card px-3.5 py-2 font-mono text-xs shadow-soft [animation-delay:0.6s]">
        {stack[0]} · {stack[1]}
      </div>
    </motion.div>
  )
}
