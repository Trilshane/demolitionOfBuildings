import styles from "./scss/Form.module.scss";

/*Форма отправки данных */

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Заказать расчет цены</h1>
        <input
          className={styles.input}
          name="mail"
          type="email"
          placeholder="Введите email"
        />
        <input
          className={styles.input}
          name="phone"
          type="tel"
          pattern="[0-9]{11}"
          placeholder="77777777777"
          required
        />
        <button className={styles.btn} type="submit">
          Отправить данные
        </button>
      </form>
    </div>
  );
};
export default Form;
