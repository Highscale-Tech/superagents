import {
  ChartDonut,
  CrosshairSimple,
  Gauge,
  UsersFour,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="" />
      <div className={styles.menu}>
        <NavLink className={styles.menuItem} to="/explore">
          <UsersFour weight="duotone" size={28} />
          Build your Team
        </NavLink>
        <NavLink className={styles.menuItem} to="/init">
          <CrosshairSimple weight="duotone" size={28} />
          Initialize The Project
        </NavLink>
        <NavLink className={styles.menuItem} to="/dashboard">
          <Gauge weight="duotone" size={28} />
          Dashboard
        </NavLink>
        <NavLink className={styles.menuItem} to="/log">
          <ChartDonut weight="duotone" size={28} />
          Log
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
