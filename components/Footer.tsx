import { Logo } from "@/components/Logo";
import { BRAND_NAME } from "@/lib/brand";
import { TELEGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-subtle bg-surface-raised">
      <div className="container-narrow flex flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8 lg:px-12">
        <Logo />
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {new Date().getFullYear()} {BRAND_NAME}. Все права защищены.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
}
