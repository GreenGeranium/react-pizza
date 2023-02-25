import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Index from "../components/PizzaBlock";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63fa24f4beec322c57ee3691.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories></Categories>
        <Sort></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => {
              return <Index key={i}></Index>;
            })
          : pizzas.map((pizza) => {
              return <PizzaBlock {...pizza} key={pizza.id}></PizzaBlock>;
            })}
      </div>
    </>
  );
}

export default Home;
