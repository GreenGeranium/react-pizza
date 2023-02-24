import './scss/app.scss';
import React from 'react';
import Sort from './components/Sort';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header></Header>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={500}></PizzaBlock>
            <PizzaBlock title="Мексиканская" price={500}></PizzaBlock>
            <PizzaBlock title="Мексиканская" price={500}></PizzaBlock>
            <PizzaBlock title="Мексиканская" price={500}></PizzaBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
