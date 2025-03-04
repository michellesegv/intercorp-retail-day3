import { User2 } from "lucide-react";

import { Button, Separator } from "@/components/ui";

import styles from "./styles.module.css";
import Link from "next/link";
import CartCount from "../cart-count";

export default function HeaderActions() {
  const user = {
    name: "Juanito",
    email: "juanito@mail.com",
  };

  return (
    <div className={styles["header-actions"]}>
      {user && (
        <>
          <Link href="/account">
            <Button
              size="xl-icon"
              variant="ghost"
              aria-label="Cuenta de usuario"
            >
              <User2 />
            </Button>
          </Link>
          <Separator
            orientation="vertical"
            className={styles["header-actions__separator"]}
          />
        </>
      )}
      <CartCount />
    </div>
  );
}
