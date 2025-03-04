import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { getCartItemsCount } from "@/lib/actions";

export default async function CartCount() {
  const count = await getCartItemsCount();

  return (
    <Button
      size="xl-icon"
      variant="ghost"
      aria-label="Carrito de compras"
      asChild
      className={styles["cart-count__cart"]}
    >
      <Link href="/cart">
        <ShoppingCart />
        {count > 0 && (
          <span className={styles["cart-count__cart-badge"]}>{count}</span>
        )}
      </Link>
    </Button>
  );
}
