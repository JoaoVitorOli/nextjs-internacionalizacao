import Link from "next/link";
import { getLocale } from "../../utils/getLocale";

import styles from "./styles.module.css";

interface HeaderProps {
  headerTitle: string;
  buttonName: string;
}

export function Header({ 
  headerTitle,
  buttonName
}: HeaderProps) {
  const locale = getLocale();

  return (
    <header className={styles.header}>
      <h1>{headerTitle}</h1>

      <Link 
        href="/"
        locale={locale === "pt" ? "en" : "pt"}
      >
        {buttonName}
      </Link>
    </header>
  )
}
