import MainPage from "./components/MainPage/MainPage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Shop from "./components/ShopPage/Shop";
import Stories from "./components/Stories/Stories";
import MyHeader from "./components/MainPage/MyHeader";

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
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
