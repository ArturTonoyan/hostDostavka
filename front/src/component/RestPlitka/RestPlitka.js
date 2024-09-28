import { useContext, useEffect, useState } from "react";
import styles from "./RestPlitka.module.scss";
import DataContext from "../../context";

function RestPlitka(props) {
  const { context } = useContext(DataContext);
  const [cartData, setCartData] =  useState(context.cart);

  const funPlusClick = () => {
    context.setCart([...context.cart, props.item.id]);
    setCartData([...context.cart, props.item.id]);
  };

  useEffect(() => {
    setCartData(context.cart);
  }, [ context.cart]);
  const funPlusMinus = () => {
    const index = cartData.indexOf(props.item.id);
    cartData.splice(index, 1);
    context.setCart([...cartData]);
    setCartData([...cartData]);
  }
  const count = cartData.filter((el) => el === props.item.id).length;
  return (
    <div className={styles.RestPlitka}>
      <div className={styles.imgTitle}>
        <img src={props.item.img} alt="img" />
      </div>
      <p className={styles.name}>{props.item.name}</p>
      <span>{props.item.massa}</span>
      <div className={styles.boxBottom}>
        <p className={styles.price}>{props.item.price}₽</p>
        {
          cartData.includes(props.item.id) ? (
           <div className={styles.count}>
              <p  onClick={funPlusMinus}>-</p>
              <p>{count}</p>
              <p  onClick={funPlusClick}>+</p>
           </div>
          ) : 
          <img
          className={styles.plus}
          src="./img/plus.svg"
          alt="img"
          onClick={funPlusClick}
        />
        }
        
      </div>
    </div>
  );
}

export default RestPlitka;
