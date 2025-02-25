"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface MainNavProps {
  items: {
    to: string;
    label: string;
  }[];
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal" className={styles["main-nav"]}>
      <ul className={styles["main-nav__list"]} role="menubar">
        {items.map((item) => (
          <li key={item.to} className={styles["main-nav__item"]} role="none">
            <Link
              href={item.to}
              role="menuitem"
              className={clsx(styles["main-nav__link"], {
                [styles["main-nav__link--active"]]: pathname === `/${item.to}`,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
