import Image from "next/image";
import Link from "next/link";
import { LOGO_ALT, LOGO_SRC } from "@/lib/brand";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={320}
        height={76}
        priority={priority}
        className="h-12 w-auto sm:h-14 md:h-16 lg:h-[4.5rem]"
      />
    </Link>
  );
}
