import styles from "./divider.module.css";
import { DividerTypes } from "./divider.types";

export default function Divider({ margin, height, style }: DividerTypes) {
  return (
    <div
      className={styles.divider}
      style={{
        margin,
        height,
        ...style,
      }}
    />
  );
}
