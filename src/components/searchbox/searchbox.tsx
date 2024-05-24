import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SearchboxTypes } from "./searchbox.types";
import styles from "./searchbox.module.css";
export default function Searchbox({ rightElements }: SearchboxTypes) {
  return (
    <div className={styles.searchboxContainer} style={{}}>
      <div style={{ padding: "0 16px" }}>
        <label htmlFor="input">
          <MagnifyingGlassIcon width={24} strokeWidth={2.5} />
        </label>
      </div>
      <input
        id="input"
        type="text"
        className={styles.searchbox}
        placeholder="Search.."
      />
      {rightElements}
    </div>
  );
}
