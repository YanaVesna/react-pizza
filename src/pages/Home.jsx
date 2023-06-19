import React from "react";

import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
//import pizzas from "../assets/pizzas.json";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App.js";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  /* const [categoryID, setCategoryID] = React.useState(0); */
  const categoryID = useSelector((state) => state.filter.categoryID);
  const dispatch = useDispatch();
  console.log(dispatch, "dispatch");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "beliebtheit",
    sortProperty: "rating",
  });

  const onChangeCategory = (id) => {
    console.log(id);
  };
  console.log("category ID", categoryID);

  //https://64365ecf8205915d34f1b803.mockapi.io/items
  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.sortProperty.replace("-", "");

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryID > 0 ? `category=${categoryID}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      /* `http://localhost:3001/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}` */
      `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}&project=1`
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
        <Categories value={categoryID} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Alle Pizzen</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
