export function ProjectBadges() {
  return (
    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Live demo
      </span>
      <span className="rounded-full border border-zinc-500/40 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-sm">
        Концепт
      </span>
    </div>
  );
}
