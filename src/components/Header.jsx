import logo from "../img/logo-2.webp";

import styles from "./scss/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <ul className={styles.menu}>
        <li className={styles.elemMenu}>О компании</li>
        <li className={styles.elemMenu}>Услуги</li>
        <li className={styles.elemMenu}>Портфолио</li>
      </ul>
      <div className={styles.contacts}>
        <div className={styles.phone}>+7(777)777-77-77</div>
        <div className={styles.mail}>mail@mail.com</div>
      </div>
    </div>
  );
};
export default Header;
