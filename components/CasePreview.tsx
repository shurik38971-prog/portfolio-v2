type Variant = "dental" | "school" | "lawyer" | "repair";

const accents: Record<Variant, { bg: string; accent: string; muted: string }> = {
  dental: {
    bg: "from-slate-50 to-sky-50",
    accent: "bg-sky-500",
    muted: "bg-sky-100",
  },
  school: {
    bg: "from-violet-50 to-indigo-50",
    accent: "bg-violet-600",
    muted: "bg-violet-100",
  },
  lawyer: {
    bg: "from-stone-100 to-amber-50",
    accent: "bg-amber-800",
    muted: "bg-stone-200",
  },
  repair: {
    bg: "from-zinc-100 to-orange-50",
    accent: "bg-orange-500",
    muted: "bg-orange-100",
  },
};

export function CasePreview({ variant }: { variant: Variant }) {
  const { bg, accent, muted } = accents[variant];

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-950 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="ml-2 h-4 flex-1 rounded bg-zinc-800/80" />
      </div>

      <div className={`aspect-[16/10] bg-gradient-to-br ${bg} p-4 sm:p-5`}>
        <div className="flex h-full flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className={`h-2 w-16 rounded-full ${accent}`} />
            <div className="flex gap-1.5">
              <div className={`h-2 w-8 rounded-full ${muted}`} />
              <div className={`h-2 w-8 rounded-full ${muted}`} />
              <div className={`h-6 w-14 rounded-md ${accent}`} />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-2 sm:gap-3">
            <div className={`h-3 w-3/4 max-w-[220px] rounded-full ${accent} opacity-90`} />
            <div className={`h-2 w-full max-w-[280px] rounded-full ${muted}`} />
            <div className={`h-2 w-5/6 max-w-[240px] rounded-full ${muted} opacity-80`} />
            <div className="mt-1 flex gap-2">
              <div className={`h-7 w-20 rounded-lg ${accent}`} />
              <div className={`h-7 w-16 rounded-lg border-2 border-white/60 bg-white/40`} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-white/50 bg-white/60 p-2 backdrop-blur-sm"
              >
                <div className={`mb-1.5 h-1.5 w-8 rounded-full ${accent} opacity-70`} />
                <div className={`h-1 w-full rounded-full ${muted}`} />
                <div className={`mt-1 h-1 w-2/3 rounded-full ${muted} opacity-70`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
