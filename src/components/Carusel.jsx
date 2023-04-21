import { Children, cloneElement, useEffect, useState } from "react";

import styles from "./scss/Carusel.module.scss";

/* Слайдер */

const Carusel = ({ children }) => {
  const [pages, setpages] = useState([]); //стейт страниц
  const [offset, setOffset] = useState(0); //стейт позиции слайдера

  /* функции которые определют в какую сторону произойдет движение слайдера, а так же блок если нет контента дальше */

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 100;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    console.log(offset);
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 100;
      const maxOffset = -(100 * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setpages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          },
        });
      })
    );
  }, []);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handleLeftArrowClick}
      >
        &laquo;
      </button>
      <div className={styles.window}>
        <div
          className={styles.allPagesContainer}
          style={{ transform: `translateX(${offset}%)` }}
        >
          {pages}
        </div>
      </div>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleRightArrowClick}
      >
        &raquo;
      </button>
    </div>
  );
};
export default Carusel;
