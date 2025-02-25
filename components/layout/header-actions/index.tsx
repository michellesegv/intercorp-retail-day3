import { ShoppingCart, User2 } from "lucide-react";

import { Button, Separator } from "@/components/ui";

import styles from "./styles.module.css";
import Link from "next/link";

export default function HeaderActions() {
  const user = {
    name: "Juanito",
    email: "juanito@mail.com",
  };
  const cart = {
    items: [{ quantity: 2 }],
  };

  const totalItems =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
      <Button
        size="xl-icon"
        variant="ghost"
        aria-label="Carrito de compras"
        asChild
        className={styles["header-actions__cart"]}
      >
        <Link href="/cart">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className={styles["header-actions__cart-badge"]}>
              {totalItems}
            </span>
          )}
        </Link>
      </Button>
    </div>
  );
}
