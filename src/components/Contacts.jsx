import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { BsBuildingFillCheck } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { MdPhoneInTalk, MdMail, MdOutlineAccessTime } from "react-icons/md";

import styles from "./scss/Contacts.module.scss";

/*Зона контактов и карты*/

const Contacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.flexContainer}>
        <div className={styles.adresses}>
          <div className={styles.adressElement}>
            <BsBuildingFillCheck />
            <span>
              <b>Название:</b>Техно-Диггер
            </span>
          </div>
          <div className={styles.adressElement}>
            <GiPositionMarker />
            <span>
              <b>Адрес:</b>Москва, ул. Свободы, д. 35, стр. 11
            </span>
          </div>
          <div className={styles.adressElement}>
            <MdPhoneInTalk />
            <span>
              <b>Телефон:</b>+7 (777) 777-77-77
            </span>
          </div>
          <div className={styles.adressElement}>
            <MdMail />
            <span>
              <b>Email:</b>mail@mail.com
            </span>
          </div>
          <div className={styles.adressElement}>
            <MdOutlineAccessTime />
            <span>
              <b>Время работы:</b> 09:00-18:00
            </span>
          </div>
        </div>
        <YMaps>
          <Map
            defaultState={{ center: [55.838612, 37.444683], zoom: 14 }}
            width={100 + "%"}
            height={40 + "vh"}
          >
            <Placemark defaultGeometry={[55.838612, 37.444683]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
export default Contacts;
