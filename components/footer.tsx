import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-xs font-bold text-primary-foreground">
            DP
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            Kondagalla Durga Prasad
          </span>
        </div>

        <p className="order-last text-xs text-muted-foreground md:order-none">
          © {new Date().getFullYear()} · Designed &amp; built with intent.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Durgathekondagalla"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/durga-prasad-kondagalla"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="mailto:durgaprasad48401@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
