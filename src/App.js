import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
import pizzas from "./assets/pizzas.json";

console.log(pizzas);

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {/* <PizzaBlock title="Mexciko" price={500} /> */}
            {pizzas.map((obj) => (
              <Skeleton key={obj.id} {...obj} />
              /* title={obj.title}
                price={obj.price}
                imageURL={obj.imageURL}
                types={obj.types}
                sizes={obj.sizes}
              /> */
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
