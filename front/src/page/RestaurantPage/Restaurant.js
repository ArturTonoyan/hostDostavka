import { useNavigate } from "react-router-dom";
import styles from "./Restaurant.module.scss";
import RestPlitka from "../../component/RestPlitka/RestPlitka";
import { useContext } from "react";
import DataContext from "../../context";

function Restaurant(props) {
  const { context } = useContext(DataContext);
  const navigate = useNavigate();
  const funClickback = () => {
    navigate(-1);
  };


  let sum = 0;
  console.log("props", props)
  console.log("context.cart", context.cart)
  context.cart.map((el) => {
    const item = props.menu.find((e) => e.id === el);
    if (item) {
        sum += Number(item.price);
    }
    
  })

  
 

  return (
    <div className={styles.Restaurant}>
      <div className={styles.title}>
        <img className={styles.imgBg} src={props.data.img} alt="img" />
        <div className={styles.imgs}>
          <div className={styles.left}>
            <img
              onClick={funClickback}
              className={styles.arrowBack}
              src="./img/arrovL.svg"
              alt="img"
            />
          </div>
          <div className={styles.rigth}>
            <img className={styles.arrowL1} src="./img/info.svg" alt="img" />
            <img className={styles.arrowL} src="./img/izbr.svg" alt="img" />
          </div>
        </div>
        <div className={styles.titleBottomLeft}>
          <p>{props.data.title}</p>
          <span>{props.data.time}</span>
        </div>
        <img className={styles.rating} src="./img/reting.svg" alt="img" />
      </div>

      <div className={styles.container}>
        <div className={styles.search}>
          <img src="./img/lupa.svg" alt="img" />
          <input type="text" placeholder="Быстрый поиск" />
        </div>
        <div className={styles.gruz}>
          <p>Популярное</p>
          {props.data.kitchen?.map((kitchen) => (
            <p>{kitchen}</p>
          ))}
        </div>

        <h2>Популярное</h2>
        <div className={styles.boxPlitka}>
          {props.menu?.map((el) => (
            <RestPlitka key={el.id} item={el} />
          ))}
        </div>
        {
          context.cart.length > 0 &&
          <div className={styles.Bottom}>
            <button onClick={() => navigate("/CartPage")}>
              <p>Заказать</p> <p>{ sum }₽</p>
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Restaurant;
