export type ProjectSlug = "online-school" | "dental" | "remont" | "advokat";

export interface PortfolioProject {
  slug: ProjectSlug;
  title: string;
  emoji: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  stack: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "dental",
    title: "Стоматология",
    emoji: "🦷",
    description:
      "Премиальный сайт медицинской клиники с акцентом на доверие, услуги и удобную запись.",
    href: "https://premium-dental-clinic-bay.vercel.app",
    image: "/projects/dental.jpg",
    imageAlt: "Превью сайта стоматологической клиники",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "online-school",
    title: "Онлайн-школа",
    emoji: "🎓",
    description:
      "Концепт EdTech-платформы с личным кабинетом, программой обучения и продуктовым UX.",
    href: "https://online-school-seven.vercel.app",
    image: "/projects/online-school.jpg",
    imageAlt: "Превью сайта онлайн-школы",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "remont",
    title: "Ремонт квартир",
    emoji: "🔧",
    description:
      "Коммерческий лендинг с калькулятором стоимости и понятным сценарием обращения.",
    href: "https://remont-kappa.vercel.app",
    image: "/projects/remont.jpg",
    imageAlt: "Превью сайта сервиса ремонта квартир",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "advokat",
    title: "Юрист",
    emoji: "⚖️",
    description:
      "Сайт частного специалиста с акцентом на личный бренд, доверие и экспертность.",
    href: "https://advokat-coral.vercel.app",
    image: "/projects/advokat.jpg",
    imageAlt: "Превью сайта частного юриста",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export function getProjectBySlug(slug: ProjectSlug) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
