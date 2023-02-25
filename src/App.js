import "./scss/app.scss";
import React, { useEffect, useState } from "react";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://63fa24f4beec322c57ee3691.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => {
              return <PizzaBlock {...pizza} key={pizza.id}></PizzaBlock>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
