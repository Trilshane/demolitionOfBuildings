import { Link } from "react-scroll";

import Form from "./Form";
import logo from "../img/logo-2.webp";

import styles from "./scss/Footer.module.scss";

/*Зона футера и формы отпраки данных*/

const Footer = () => {
  return (
    <div className={styles.container}>
      <div id="form" className={styles.formContainer}>
        <div className={styles.titleZone}>
          <div className={styles.phoneZone}>
            <h1 className={styles.yellowTitle}>
              Позвоните по телефону <br />
              (777)777-77-77
            </h1>
            <h4 className={styles.whiteTitle}>
              и получите бесплатный предварительный расчет стоимости демонтажа
              здания или сооружения
            </h4>
          </div>
          <div className={styles.applicationZone}>
            <h4 className={styles.yellowTitle}>или оставте заявку</h4>
            <h4 className={styles.whiteTitle}>
              и мы свяжемся с вами в течение часа в рабочее время
            </h4>
          </div>
        </div>
        <Form />
      </div>
      <div className={styles.footContainer}>
        <div className={styles.logoZone}>
          <Link to="head" spy={true} smooth={true} offset={50} duration={500}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <p className={styles.about}>
            © ООО "ТЕХНО-ДИГГЕР" 2016-2023 <br />
            ИНН 7733812711, КПП 263601001 <br />
            МОСКВА, УЛ. СВОБОДЫ, Д. 35, СТР. 11
          </p>
        </div>
        <div className={styles.contactsZone}>
          <a href="tel:+77777777777" className={styles.phone}>
            +7(777)777-77-77
          </a>
          <a href="mailto:mail@mail.com" className={styles.mail}>
            mail@mail.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
