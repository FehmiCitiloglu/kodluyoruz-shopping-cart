import MainPage from "./components/MainPage/MainPage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Shop from "./components/ShopPage/Shop";
import Stories from "./components/Stories/Stories";
import MyHeader from "./components/MainPage/MyHeader";

import CartPage from "./components/Cart/CartPage";

import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <MyHeader />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/productdetail">
            <ProductDetail />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
