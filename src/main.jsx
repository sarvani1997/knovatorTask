import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GiveReview from "./giveReview";
import Reviews from "./reviews";

const App = () => {
  return (
    <StrictMode>
      <Switch>
        <Route exact path={"/"}>
          <Reviews />
        </Route>
        <Route exact path={"/give_review"}>
          <GiveReview />
        </Route>
      </Switch>
    </StrictMode>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
