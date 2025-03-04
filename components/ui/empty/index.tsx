import { CircleSlash2 } from "lucide-react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export function Empty({
  message = "No items found. Try adjusting your filters.",
  className,
}: EmptyStateProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <CircleSlash2 className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
}
