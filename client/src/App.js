import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Screen Components
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand" href="index.html">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
