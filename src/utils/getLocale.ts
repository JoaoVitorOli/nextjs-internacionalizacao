import { useRouter } from "next/router";

export function getLocale() {
  const { locale } = useRouter();

  const stringLocale = locale ? locale : "";

  return stringLocale;
}