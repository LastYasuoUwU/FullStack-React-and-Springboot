import "./App.css";
import { Navbar } from "./layouts/NavBarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Footer } from "./layouts/NavBarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
