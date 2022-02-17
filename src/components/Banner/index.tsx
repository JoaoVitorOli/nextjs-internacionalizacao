import { useRouter } from "next/router"
import { getLocale } from "../../utils/getLocale";

import styles from "./styles.module.css";

interface BannerProps {
  BannerTitle: string;
}

export function Banner({ BannerTitle }: BannerProps) {
  const locale = getLocale();

  function setBannerImage(locale: string) {
    if (locale === "en") {
      return {
        backgroundImage: "url('/assets/banner2.jpg')"
      }
    } else {
      return {
        backgroundImage: "url('/assets/banner1.jpg')"
      }
    }
  }

  return (
    <section
      style={setBannerImage(locale)}
      className={styles.banner}
    >
      <h2>{BannerTitle}</h2>
    </section>
  )
}
