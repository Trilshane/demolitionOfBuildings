import styles from "./scss/AboutUsZone.module.scss";

import img from "../img/about-img.webp";

const AboutUsZone = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Коротко о компании «Техно-Диггер»</h1>
      <div className={styles.aboutUs}>
        <p className={styles.content}>
          <b>"Техно-Диггер"</b> ведущая строительная компания полного цикла в
          области сноса, демонтажа и строительства, выполняющая широкий спектр
          задач любой сложности. Наша компания оказывает целый комплекс услуг от
          разработки и согласования проектной документации до сдачи объекта в
          эксплуатацию. Одним из ключевых направлений деятельности компании
          "Техно-Диггер" является снос и демонтаж различного типа зданий,
          строений и сооружений.
        </p>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
export default AboutUsZone;
