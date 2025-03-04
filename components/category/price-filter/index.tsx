"use client";

import { Button, Input } from "@/components/ui";

import styles from "./styles.module.css";
import clsx from "clsx";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PriceFilterProps {
  className?: string;
}

export function PriceFilter({ className }: PriceFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    const formData = new FormData(e.currentTarget);
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");

    if (minPrice) {
      params.set("minPrice", minPrice.toString());
    } else {
      params.delete("minPrice");
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice.toString());
    } else {
      params.delete("maxPrice");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(styles["price-filter"], className)}
    >
      <fieldset>
        <legend className={styles["price-filter__legend"]}>Precio</legend>
        <div className={styles["price-filter__inputs"]}>
          <div className={styles["price-filter__field"]}>
            <label className={styles["price-filter__label"]}>Min</label>
            <Input
              type="number"
              name="minPrice"
              defaultValue={minPrice}
              min="0"
            />
          </div>
          <div className={styles["price-filter__field"]}>
            <label className={styles["price-filter__label"]}>Max</label>
            <Input
              type="number"
              name="maxPrice"
              defaultValue={maxPrice}
              min="0"
            />
          </div>
        </div>
      </fieldset>

      <Button
        type="submit"
        size="xl"
        variant="secondary"
        className={styles["price-filter__button"]}
      >
        Filtar Productos
      </Button>
    </form>
  );
}
