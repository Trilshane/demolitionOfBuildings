import styles from "./scss/TitleZone.module.scss";

import video2 from "../video/video2.mp4";
import logo from "../img/back-title.webp";
import Header from "./Header";

const TitleZone = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.media}>
          <video
            className={styles.video}
            src={video2}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className={styles.content}>
          <div className={styles.titleFlex}>
            <div className={styles.titles}>
              <h1 className={styles.title}>Снос</h1>
              <h1 className={styles.title}>Демонтаж</h1>
              <h1 className={styles.title}>Ликвидация</h1>
            </div>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
          <h2 className={styles.motto}>«РАЗРУШАЯ ПРОШЛОЕ, СОЗДАЕМ БУДУЩЕЕ»</h2>
          <button className={styles.btn}>Оставить заявку</button>
        </div>
      </div>
    </>
  );
};
export default TitleZone;
