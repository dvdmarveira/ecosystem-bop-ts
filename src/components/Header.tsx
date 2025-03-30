import styles from "./Header.module.css";

import bopLogo from "../assets/bopteam.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={bopLogo} alt="Logotipo do Bop" />
      <a href="#">
        <h1>
          bop<span>bop</span>
        </h1>
      </a>
    </header>
  );
}
