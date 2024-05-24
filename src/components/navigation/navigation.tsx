import styles from "./navigation.module.css";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
export const menuNavigation = [
  { name: "currency" },
  { name: "items" },
  { name: "accounts" },
  { name: "services" },
  { name: "swap" },
  { name: "sell" },
];
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbarContainer}>
        <ul className={styles.headerList}>
          {menuNavigation.map(({ name }) => (
            <li>
              <Dropdown text={name} />
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: "auto", marginRight: 32 }}>
          <Dropdown text={"USD"} />
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <Button
            text="CART (5)"
            variant="default"
            icon={
              <ShoppingCartIcon color="white" width={18} strokeWidth={2.5} />
            }
          />
          <Button
            text="SIGN IN"
            variant="filled"
            icon={<UserIcon color="#314d4f" width={17} strokeWidth={2.5} />}
          />
        </div>
      </div>
    </nav>
  );
}
