import { useNavigate } from "react-router-dom";
import styles from "./RestComponent.module.scss";
import { useContext } from "react";
import DataContext from "../../context";

function RestComponent(props) {
  const navigate = useNavigate();
  const { context } = useContext(DataContext);
  const funClick = () => {
    navigate(props.item.path);
    context.setSelectRestaurant(props.item.id);
  };
  return (
    <div className={styles.RestComponent} onClick={funClick}>
      <div className={styles.puri}>
        <img src={props.item.img} alt="img" />
      </div>
      <div className={styles.puriTitle}>
        <h2>{props.item.title}</h2>
        <div>
          <img src="./img/time.svg" alt="img" />
          <p>{props.item.time}</p>
        </div>
      </div>
      <div className={styles.gruz}>
        {props.item.kitchen?.map((kitchen) => (
          <p>{kitchen}</p>
        ))}
      </div>
    </div>
  );
}

export default RestComponent;
