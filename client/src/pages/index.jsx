import { Link } from "react-router-dom";
import styles from "./index.module.css";

function IndexPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src="/logo-dark.png" alt="" />
        <Link to="/explore" className={styles.styledLink}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
