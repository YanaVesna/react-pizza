import React from "react";

import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
//import pizzas from "../assets/pizzas.json";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App.js";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  //https://64365ecf8205915d34f1b803.mockapi.io/items
  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.sortProperty.replace("-", "");

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryID > 0 ? `category=${categoryID}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortType, currentPage, searchValue]);

  //метод без бекэнда
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryID}
          onChangeCategory={(i) => setCategoryID(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
