import React from "react";
import styles from "./layout.module.css";
export default function GlobalLayout(props: React.PropsWithChildren) {
  return <div className={styles.layoutContainer}>{props.children}</div>;
}
