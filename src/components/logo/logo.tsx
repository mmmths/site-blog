import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/Brand-Logo.svg" alt="Logo" width={116} height={32} />
    </Link>
  );
}
