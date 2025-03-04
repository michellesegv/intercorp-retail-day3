"use client";

import { Button, Input } from "@/components/ui";

import styles from "./styles.module.css";
import clsx from "clsx";

interface PriceFilterProps {
  className?: string;
}

export function PriceFilter({ className }: PriceFilterProps) {
  return (
    <form className={clsx(styles["price-filter"], className)}>
      <fieldset>
        <legend className={styles["price-filter__legend"]}>Precio</legend>
        <div className={styles["price-filter__inputs"]}>
          <div className={styles["price-filter__field"]}>
            <label className={styles["price-filter__label"]}>Min</label>
            <Input type="number" name="minPrice" min="0" />
          </div>
          <div className={styles["price-filter__field"]}>
            <label className={styles["price-filter__label"]}>Max</label>
            <Input type="number" name="maxPrice" min="0" />
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
