import Image from "next/image";
import Link from "next/link";
import { getLocale } from "../../utils/getLocale";

import styles from "./styles.module.css";

interface CourseCardProps {
  title: string;
  path: string;
  image: string;
  buttonName: string;
}

export function CourseCard({
  title,
  path,
  image,
  buttonName
}: CourseCardProps) {
  const locale = getLocale();

  return (
    <div className={styles.card}>
      <Image
        src={image}
        width={100}
        height={100}
      />
      <span>{title}</span>

      <Link href={`/cursos/${path}`} locale={locale}>{buttonName}</Link>
    </div>
  )
}
