import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "./hamburger-menu.module.css";
import {
  ElementsType,
  HamburgerMenuProps,
  SideMenuProps,
} from "./hamburger-menu.types";

export default function HamburgerMenu({
  onOpen,
  onClose,
  isOpen,
  ...rest
}: HamburgerMenuProps) {
  return (
    <div>
      {!isOpen && (
        <button onClick={onOpen} className={styles.menuButton} {...rest}>
          <Bars3Icon width={26} strokeWidth={1.8} color="#f3f4f6" />
        </button>
      )}

      {isOpen && (
        <button onClick={onClose} className={styles.menuButton} {...rest}>
          <XMarkIcon width={26} strokeWidth={1.8} color="#f3f4f6" />
        </button>
      )}
    </div>
  );
}

export function SideMenu({
  open,
  logo,
  top,
  elements = [{ name: "Example" }],
}: SideMenuProps) {
  console.log("here", open);
  return (
    <div
      style={{
        height: "100vh",
        width: 250,
        backgroundColor: "#2a2b37",
        borderRight: "1px solid #404150",
        borderTop: "1px solid #404150",
        position: "fixed",
        transform: open ? " translateX(0%)" : "translateX(-100%)",

        top,
        left: 0,
      }}
    >
      {logo}
      <ul
        style={{
          padding: "0 22px",
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
        }}
      >
        {elements.map((el: ElementsType) => (
          <a style={{ cursor: "pointer", padding: "16px 0" }}>
            <li key={el.name}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "white", fontWeight: 500 }}>{el.name}</p>
                <div
                  style={{ display: "flex", float: "left", alignItems: "end" }}
                >
                  <ChevronRightIcon color="white" width={18} height="auto" />
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
