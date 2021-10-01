import MainPage from "./components/MainPage/MainPage";
import "./App.css";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./components/About/About";
import Shop from "./components/ShopPage/Shop";
import Stories from "./components/Stories/Stories";
import MyHeader from "./components/MainPage/MyHeader";

import CartPage from "./components/Cart/CartPage";

import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthContext from "./store/auth-context";
import UserPage from "./components/UserPage/UserPage";

function App() {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // const authCtx = useContext(AuthContext);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
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
          <Route path="/login">{!isAuth ? <Login /> : <UserPage />}</Route>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart">
            <CartPage />
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
