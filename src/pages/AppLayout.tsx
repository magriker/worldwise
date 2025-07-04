// import { AppNav } from "../components/AppNav";
import { Map } from "../components/map";
import { Sidebar } from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <Map></Map>
    </div>
  );
}
