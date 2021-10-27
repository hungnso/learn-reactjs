// import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ColorBox from "./components/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import CartFeatuer from "./features/Cart";
import ProductFeature from "./features/Product";
import TodoFeature from "./features/Todo";
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
        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/colorboxs" component={ColorBox} exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeatuer} />
      </Switch>
    </div>
  );
}

export default App;
