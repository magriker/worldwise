import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { AppNav } from "./AppNav";
import { Outlet } from "react-router-dom";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <Outlet></Outlet>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise inc
        </p>
      </footer>
    </div>
  );
}
