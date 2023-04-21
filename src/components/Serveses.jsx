import img1 from "../img/excavator-1.webp";
import img2 from "../img/excavator-2.webp";
import img3 from "../img/kaska.webp";

import styles from "./scss/Serveses.module.scss";

/*Секция услуг которые предоставляет компания */

const Serveses = () => {
  return (
    <div id="servises" className={styles.container}>
      <h1 className={styles.title}>Чем мы занимаемся?</h1>
      <div className={styles.demolitionAndDismantling}>
        <div className={styles.demolitionAndDismantlingTitle}>
          <span className={styles.quotesYellow}>&raquo;</span>
          <span className={styles.titleContentBlue}>Снос и демонтаж</span>
        </div>
        <div className={styles.lists}>
          <ul className={styles.list}>
            <li className={styles.listElem}>
              Механизированный снос зданий и сооружений
            </li>
            <li className={styles.listElem}>
              Дезактивация и ликвидация промышленных объектов и территорий,
              включая демонтаж опасных объектов
            </li>
            <li className={styles.listElem}>
              Реновация промышленных территорий на действующих заводах и
              предприятиях
            </li>
            <img src={img1} alt="img1" />
          </ul>
          <ul className={styles.list}>
            <li className={styles.listElem}>
              Реновация городских территорий, в том числе в местах плотной
              исторической застройки
            </li>
            <li className={styles.listElem}>
              Поэлементная разборка зданий и сооружений, включая частичный
              демонтаж действующих строений
            </li>
            <li className={styles.listElem}>
              Демонтаж высотных зданий и сооружений, дымовых труб и прочих
              объектов
            </li>
            <li className={styles.listElem}>
              Локальный демонтаж внутренних конструкций и оборудования для
              последующей реконструкции
            </li>
            <li className={styles.listElem}>
              Демонтаж металлоконструкций, прием и переработка
            </li>
            <li className={styles.listElem}>
              Алмазная резка, сверление, ломка бетона
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.construction}>
        <div className={styles.constructionTitle}>
          <span className={styles.quotesBlue}>&raquo;</span>
          <span className={styles.titleContentBlue}>Строительство</span>
        </div>
        <div className={styles.flex}>
          <ul className={styles.list}>
            <li className={styles.listElem}>
              Земляные работы, разработка котлованов
            </li>
            <li className={styles.listElem}>
              Устройство шпунтового ограждения
            </li>
            <li className={styles.listElem}>Общестроительные работы</li>
            <li className={styles.listElem}>
              Изготовление и монтаж металлоконструкций
            </li>
          </ul>
          <img src={img2} alt="img" />
        </div>
      </div>
      <div className={styles.engineering}>
        <div className={styles.engineeringTitle}>
          <span className={styles.quotesYellow}>&raquo;</span>
          <span className={styles.titleContentBlue}>
            Проектирование и согласование документации
          </span>
        </div>
        <div className={styles.flex}>
          <img className={styles.img} src={img3} alt="img" />
          <ul className={styles.list}>
            <li className={styles.listElem}>
              Разработка проектной документации
            </li>
            <li className={styles.listElem}>
              Проведение технического обследования зданий и сообружений
            </li>
            <li className={styles.listElem}>
              Разработка и регистрация технологического регламента процесса
              обращения с отходами
            </li>
            <li className={styles.listElem}>
              Согласование проектной и получение разрешительной документации
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Serveses;
