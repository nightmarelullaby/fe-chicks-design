import Divider from "../divider/divider";
import HamburgerMenu, { SideMenu } from "../hamburger-menu/hamburger-menu";
import styles from "./header.module.css";
import { menuNavigation } from "../navigation/navigation";
import { useState } from "react";
export default function Header(props: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <header className={styles.header}>
      <div style={{ position: "relative" }}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogoContainer}>
            <img
              src="/src/assets/chicks-logo-large.png"
              className={styles.headerLogo}
            />
            <Divider margin="0 32px" style={{ height: 48 }} />
          </div>
          <div className={styles.responsiveMenu}>
            <HamburgerMenu
              isOpen={sidebarOpen}
              onOpen={openSidebar}
              onClose={closeSidebar}
            />
          </div>

          {props.children}
        </div>
        <div className={styles.responsiveMenu}>
          <SideMenu
            open={sidebarOpen}
            top={84.6}
            logo={
              <img
                src="/src/assets/chicks-logo-large.png"
                className={styles.headerLogo}
              />
            }
            elements={menuNavigation}
          />
        </div>
      </div>
    </header>
  );
}
