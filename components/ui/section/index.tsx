import { HTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      {children}
    </section>
  );
}
