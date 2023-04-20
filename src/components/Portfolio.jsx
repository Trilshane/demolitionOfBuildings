import Carusel from "./Carusel";
import img1 from "../img/portfolio1.jpg";
import img2 from "../img/portfolio2.jpg";
import img3 from "../img/portfolio3.jpg";

import styles from "./scss/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наше портфолио</h1>
      <Carusel>
        <div className={styles.elementContainer}>
          <img className={styles.img} src={img1} alt="img" />
          <p className={styles.content}>
            Реновация промышленной территории Московского ткацко-отделочного
            комбината на Большой Почтовой улице для AFI-Development Полный
            комплекс работ по сносу комплекса строений Московского
            ткацко-отделочного комбината, состоящего из 19 производственных и
            административных зданий общим объемом свыше 300 000 м3
          </p>
        </div>
        <div className={styles.elementContainer}>
          <img className={styles.img} src={img2} alt="img" />
          <p className={styles.content}>
            Комплекс работ по сносу зданий и строений в рамках строительства ЖК
            «Семеновский парк» Успешно реализован комплекс демонтажных работ по
            сносу зданий и строений общим объемом более 179 000 м3
          </p>
        </div>
        <div className={styles.elementContainer}>
          <img className={styles.img} src={img3} alt="img" />
          <p className={styles.content}>
            Реконструкция советских кинотеатров в рамках реализации проекта
            МФОЦШ ADG Group Разработан пакет исходно-разрешительной и проектной
            документации, выполнен механизированный снос 4-х зданий советских
            кинотеатров общим объемом более 81 000 м3
          </p>
        </div>
      </Carusel>
    </div>
  );
};
export default Portfolio;
