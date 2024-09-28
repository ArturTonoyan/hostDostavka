import { useContext } from "react";
import RestComponent from "../../component/RestComponent/RestComponent";
import styles from "./HomePage.module.scss";
import DataContext from "../../context";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { context } = useContext(DataContext);
  const navigate = useNavigate();
  const funLkClick = () => {
    navigate("/CartPage");
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.title}>
        <p onClick={() => navigate("./MapPage")}>
          ул. Петровская, 103А <img src="./img/arrow.svg" alt="img" />
        </p>
        <img
          className={styles.lk}
          src="./img/lk.svg"
          alt="img"
          onClick={funLkClick}
        />
      </div>
      <div className={styles.search}>
        <img src="./img/lupa.svg" alt="img" />
        <input type="text" placeholder="Быстрый поиск" />
      </div>
      <h2>Рестораны</h2>
      <div className={styles.wibor}>
        <div className={styles.box}>
          <div>
            <img src="./img/v1.svg" alt="img" />
          </div>
          <p>Выбрать</p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="./img/v2.png" alt="img" />
          </div>
          <p>Бургеры</p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="./img/v3.png" alt="img" />
          </div>
          <p>Пицца</p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="./img/v4.png" alt="img" />
          </div>
          <p>Роллы</p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="./img/v5.png" alt="img" />
          </div>
          <p>Шашлык</p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="./img/v6.png" alt="img" />
          </div>
          <p>Шаурма</p>
        </div>
      </div>

      {context.restData?.map((el) => (
        <RestComponent key={el.id} item={el} />
      ))}
    </div>
  );
}

export default HomePage;
