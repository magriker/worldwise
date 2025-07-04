import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { AppNav } from "./AppNav";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <p>List of cityes</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise inc
        </p>
      </footer>
    </div>
  );
}
