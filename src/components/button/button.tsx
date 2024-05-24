import styles from "./button.module.css";
import { ButtonTypes } from "./button.types";

export default function Button({
  text,
  icon,
  variant = "default",
}: ButtonTypes) {
  if (variant === "default") {
    return (
      <button className={styles.defaultButton} style={{}}>
        <div style={{ display: "flex", gap: 6 }}>
          {icon}
          <span className={styles.defaultButtonText}>{text}</span>
        </div>
      </button>
    );
  }
  if (variant === "filled") {
    return (
      <button className={styles.filledButton}>
        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <span className={styles.filledButtonText}>{text}</span>
          {icon}
        </div>
      </button>
    );
  }
}
