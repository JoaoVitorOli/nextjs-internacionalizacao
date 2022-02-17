import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import { CourseCard } from "./CourseCard";

interface CourseListProps {
  courseData: {
    title: string;
    path: string;
    image: {
      url: string;
    }[];
  }[],
  buttonName: string;
}

export function CourseList({
  courseData,
  buttonName
}: CourseListProps) {
  return (
    <section className={styles.cardList}>
      {courseData.map(item => (
        <CourseCard
          key={item.title}
          image={item.image[0].url}
          path={item.path}
          title={item.title}
          buttonName={buttonName}
        />
      ))}
    </section>
  )
}
