import HomePage from "./page/HomePage/HomePage";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import DataContext from "./context";
import Restaurant from "./page/RestaurantPage/Restaurant";
import CartPage from "./page/CartPage/CartPage";
import MapPage from "./page/MapPage/MapPage";
function App() {
  const [selectRestaurant, setSelectRestaurant] = React.useState(0);

  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  const restData = [
    {
      id: 0,
      img: "./img/puri.png",
      title: "ПуриПури",
      time: "30–40мин",
      kitchen: ["Грузинская кухня"],
      path: "Restaurant",
    },
    {
      id: 1,
      img: "./img/vt.png",
      title: "Вкусно - и точка",
      time: "25–35мин",
      kitchen: ["Фастфуд", "Бургеры", "Десерты", "Кофе"],
      path: "Restaurant",
    },
    {
      id: 2,
      img: "./img/samur.png",
      title: "Самурай",
      time: "35–45мин",
      kitchen: ["Суши", "Вок", "Японская кухня"],
      path: "Restaurant",
    },
  ];

  const menuNew = [
      {
        id: "g1",
        img: "./img/menu/g1.jpg",
        name: "Чахахобали",
        massa: "700 г",
        price: "800",
      },
      {
        id: "g2",
        img: "./img/menu/g2.jpg",
        name: "Салат с баклажанами",
        massa: "800 г",
        price: "500",
      },
      {
        id: "g3",
        img: "./img/menu/g3.jpg",
        name: "Харчо из говядины",
        massa: "600 г",
        price: "950",
      },
      {
        id: "g4",
        img: "./img/menu/g4.jpg",
        name: "Хачапури с сыром",
        massa: "600 г",
        price: "450",
      }
  ]

  const menu = {
    0: [
      {
        id: "g1",
        img: "./img/menu/g1.jpg",
        name: "Чахахобали",
        massa: "700 г",
        price: "800",
      },
      {
        id: "g2",
        img: "./img/menu/g2.jpg",
        name: "Салат с баклажанами",
        massa: "800 г",
        price: "500",
      },
      {
        id: "g3",
        img: "./img/menu/g3.jpg",
        name: "Харчо из говядины",
        massa: "600 г",
        price: "950",
      },
      {
        id: "g4",
        img: "./img/menu/g4.jpg",
        name: "Хачапури с сыром",
        massa: "600 г",
        price: "450",
      },
      {
        id: "g5",
        img: "./img/menu/g5.jpg",
        name: "Суп харчо из баранины",
        massa: "350 г",
        price: "550",
      },
      {
        id: "g6",
        img: "./img/menu/g6.jpg",
        name: "Курица табака",
        massa: "950 г",
        price: "1050",
      },
    ],
    1: [
      {
        id: "v1",
        img: "./img/menu/v1.jpg",
        name: "Биг Спешиал Демиглас",
        massa: "348 г",
        price: "325",
      },
      {
        id: "v2",
        img: "./img/menu/v2.jpg",
        name: "Биг Спешиал Демиглас Ролл",
        massa: "254 г",
        price: "278",
      },
      {
        id: "v3",
        img: "./img/menu/v3.jpg",
        name: "Утренний Ролл",
        massa: "264 г",
        price: "378",
      },
      {
        id: "v4",
        img: "./img/menu/v4.jpg",
        name: "Супер Бокс для тебя",
        massa: "849 г",
        price: "299",
      },
      {
        id: "v5",
        img: "./img/menu/v5.jpg",
        name: "Айс Де Люкс Чёрная смородина",
        massa: "199 г",
        price: "139",
      },
      {
        id: "v6",
        img: "./img/menu/v6.jpg",
        name: "Семейный сет на троих",
        massa: "3021 г",
        price: "873",
      },
    ],

    2: [
      {
        id: "r1",
        img: "./img/menu/r1.jpg",
        name: "Ролл Сырная Калифорния",
        massa: "230 г",
        price: "450",
      },

      {
        id: "r2",
        img: "./img/menu/r2.jpg",
        name: "Сет Семейный",
        massa: "1.1 кг",
        price: "1600",
      },

      {
        id: "r3",
        img: "./img/menu/r3.jpg",
        name: "Морской Вок",
        massa: "360 г",
        price: "410",
      },

      {
        id: "r4",
        img: "./img/menu/r4.jpg",
        name: "Пицца с морепродуктами",
        massa: "510 г",
        price: "520",
      },
    ],
  };

  const context = {
    restData,
    menuNew,
    selectRestaurant,
    setSelectRestaurant,
    menu,
    cart,
    setCart,
  };

  return (
    <DataContext.Provider
      value={{
        context,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <main className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/Restaurant"
                element={
                  <Restaurant
                    data={restData.find((item) => item.id === selectRestaurant)}
                    menu={menu[selectRestaurant]}
                  />
                }
              />
              <Route
                path="/CartPage"
                element={<CartPage cart={cart} menu={menu} />}
              />
              <Route path="/MapPage" element={<MapPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </DataContext.Provider>
  );
}

export default App;
