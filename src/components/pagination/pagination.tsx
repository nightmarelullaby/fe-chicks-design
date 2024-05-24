import styles from "./pagination.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { PaginationPageTypes, PaginationType } from "./pagination.types";

export function PaginationPage({ text, active }: PaginationPageTypes) {
  return (
    <button
      className={active ? styles.paginationPageActive : styles.paginationPage}
    >
      <span style={{ fontWeight: 600, color: "white" }}>{text}</span>
    </button>
  );
}

export default function Pagination({ pages = [1, 2, 3, 4] }: PaginationType) {
  return (
    <div className={styles.paginationContainer}>
      <button className={styles.buttons}>
        <ChevronLeftIcon width={20} color="white" strokeWidth={2.5} />
      </button>
      <div
        style={{
          display: "flex",
          margin: "0 24px",
          flexWrap: "wrap",
        }}
      >
        <PaginationPage active={true} text={"1"} />
        {pages.slice(1).map((page) => (
          <div key={page}>
            <PaginationPage text={page} />
          </div>
        ))}
      </div>
      <button className={styles.buttons}>
        <ChevronRightIcon width={20} color="white" strokeWidth={2.5} />
      </button>
    </div>
  );
}
