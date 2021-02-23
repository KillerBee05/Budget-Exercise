import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Checklist } from "./components/Checklist";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/backgroundImg.css";
import "./styles/index.css";

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/summary" exact component={Summary} />
        </Switch>
      </BrowserRouter>
      <span className="img"></span>
    </div>
  );
}

export default App;
