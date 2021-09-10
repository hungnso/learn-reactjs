// import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import TodoFeature from "./features/Todo";
import "./App.css";
import { useEffect } from "react";
import productsApi from "./api/productApi";
import ColorBox from "./components/ColorBox/ColorBox";
import CounterFeature from "./features/Counter";
import Header from "./components/Header/Header";
import ProductFeature from "./features/Product";
function App() {
  // useEffect(() => {
  //   const listApiCategories = async () => {
  //     const limt = {
  //       _limit: 10,
  //     };
  //     const productsList = await productsApi.getAll(limt);
  //     console.log(productsList);
  //   };
  //   listApiCategories();
  // }, []);
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* <Route path="/" component={ProductFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/colorboxs" component={ColorBox} exact />
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
