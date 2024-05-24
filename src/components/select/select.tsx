import { ChevronDownIcon } from "@heroicons/react/24/solid";
import styles from "./select.module.css";
import { SelectType } from "./select.types";

export default function Select({
  leftIcon,
  subheader,
  variant = "default",
  text = "select a game",
  defaultText,
  style,
}: SelectType) {
  if (variant === "withIcon") {
    return (
      <div
        className={styles.selectWithIconContainer}
        style={{
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {leftIcon}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={styles.selectWithIconSubheader}>{subheader}</span>
            <span className={styles.selectWithIconText}>
              {defaultText ? defaultText : text}
            </span>
          </div>
        </div>
        <div>
          <ChevronDownIcon color="white" width={22} strokeWidth={4} />
        </div>
      </div>
    );
  }
  if (variant === "default")
    return (
      <div
        className={styles.selectDefault}
        style={{
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {leftIcon}
          <span className={styles.selectText}>{text}</span>
        </div>
        <div>
          <ChevronDownIcon color="white" width={22} strokeWidth={4} />
        </div>
      </div>
    );
}
