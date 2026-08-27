export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-accent-gradient"
      />
      {children}
    </span>
  )
}
