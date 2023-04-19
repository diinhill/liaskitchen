import Link from "next/link";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  const { locale: activeLocale } = router;
  return (
    <Link href="/" locale={activeLocale === "de" ? "en" : "de"}>
      <li>{activeLocale === "de" ? "EN" : "DE"}</li>
    </Link>
  );
}
