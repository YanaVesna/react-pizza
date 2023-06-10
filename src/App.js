import React from "react";
import "./scss/app.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";

export const SearchContext = React.createContext();

function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
