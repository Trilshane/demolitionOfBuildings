import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import logo from "../img/logo-2.webp";

import styles from "./scss/Header.module.scss";

/*Хэдер сайта*/

const Header = () => {
  const [nav, setNav] = useState(false); // стейт для адаптивного меню
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div
        className={
          nav
            ? [styles.menuContainer, styles.active].join(" ")
            : [styles.menuContainer]
        }
      >
        <ul className={styles.menu}>
          <li>
            <Link
              onClick={() => setNav(false)}
              className={styles.elemMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              О компании
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              className={styles.elemMenu}
              to="servises"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              className={styles.elemMenu}
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Портфолио
            </Link>
          </li>
        </ul>
        <div className={styles.contacts}>
          <a href="tel:+77777777777" className={styles.phone}>
            +7(777)777-77-77
          </a>
          <a href="mailto:mail@mail.com" className={styles.mail}>
            mail@mail.com
          </a>
        </div>
      </div>
      <div
        style={!nav ? { color: "white" } : { color: "blue" }}
        className={styles.mobileBtn}
        onClick={() => setNav(!nav)}
      >
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
    </div>
  );
};
export default Header;
