import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo></Logo>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
