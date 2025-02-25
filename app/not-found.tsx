import { Button, Container, Section } from "@/components/ui";

import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Section className={styles["not-found"]}>
        <div className={styles["not-found__content"]}>
          <p className={styles["not-found__code"]}>404</p>
          <h1 className={styles["not-found__title"]}>Página no encontrada</h1>
          <p className={styles["not-found__description"]}>
            No pudimos encontrar la página que estás buscando.
          </p>
          <Button className={styles["not-found__button"]} asChild size="xl">
            <Link href="/">Regresar al inicio</Link>
          </Button>
        </div>
      </Section>
    </Container>
  );
}
