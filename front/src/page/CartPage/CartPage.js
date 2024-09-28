import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.scss";
import { useContext, useState } from "react";
import DataContext from "../../context";
import RestPlitka from "../../component/RestPlitka/RestPlitka";

function CartPage(props) {
  const navigate = useNavigate();
  const result = Object.values(props.menu).flat();
  const { context } = useContext(DataContext);
  const [coutVilka, setCoutVilka] = useState(1);
  // Create a map to count occurrences of each item
  const itemCountMap = new Map();
  props.cart.forEach((el) => {
    itemCountMap.set(el, (itemCountMap.get(el) || 0) + 1);
  });
  console.log("context.cart.data", context.cart)
  // Calculate the total sum
  let sum = 0;
  itemCountMap?.forEach((count, id) => {
    const item = result.find((e) => e.id === id);
    sum += Number(item?.price) * count;
  });

  // Function to remove an item from the cart
  const funPlusMinus = (id) => {
    console.log("props.cart before removal", props.cart);
    const index = props.cart.indexOf(id);
    if (index !== -1) {
      const newCart = [...props.cart];
      newCart.splice(index, 1);
      context.setCart(newCart);
    }
  };

  // Function to add an item to the cart
  const funPlusClick = (id) => {
    console.log("props.cart before addition", props.cart);
    context.setCart([...props.cart, id]);
  };

  const funPlusMinusVilka = () => {
    if(coutVilka > 1) {
      setCoutVilka(coutVilka - 1);
    }else{
      setCoutVilka(1);
    }
  }
  const funPlusClickVilka = () => {
    setCoutVilka(coutVilka + 1);
  }


  return (
    <div className={styles.CartPage}>
      <img
        onClick={() => navigate(-1)}
        className={styles.arrow}
        src="./img/arrow.svg"
        alt="img"
      />
      <h2>Корзина</h2>
      {props.cart.length === 0 ? (
        <p className={styles.emptyZero}>Ваша корзина пуста</p>
      ) : (
        <div className={styles.containerBox}>
        {[...itemCountMap.entries()]?.map(([id, count]) => {
          const item = result.find((e) => e.id === id);
          return (
            <div className={styles.box} key={id}>
              <img
                className={styles.imgTitle}
                src={item?.img}
                alt="i"
              />
              <div className={styles.boxRigth}>
                <div>
                  <p>{item.name}</p>
                  <div className={styles.boxRB}>
                    <p>{item.price}</p>
                    <p>{item.massa}</p>
                  </div>
                </div>
                <div>
                  <div className={styles.count}>
                    <p onClick={() => funPlusMinus(id)}>-</p>
                    <p>{count || 0}</p>
                    <p onClick={() => funPlusClick(id)}>+</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
     
      <div>
        <div className={styles.coutVilka}>
          <img src={"/img/wilki.svg"} alt="img" />
            <div>
              <div className={styles.count}>
                <p onClick={funPlusMinusVilka}>-</p>
                <p>{coutVilka}</p>
                <p onClick={funPlusClickVilka}>+</p>
              </div>
            </div>
        </div>
        <div className={styles.escho}>
          <h3>Что-то ещё?</h3>
          <div className={styles.plitkaContainer}>
              <div className={styles.boxPlitka}>
                {context?.menu[0]?.map((el) => (
                  <RestPlitka key={el.id} item={el} />
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className={styles.Bottom}>
        <button onClick={() => navigate("../MapPage")}>
          <p>30–40мин</p> <p>Далее</p> <p>{sum}₽</p>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
