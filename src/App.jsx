import Button from "./Button";
import styles from "./module.css";
import React, { useState, useEffect } from "react";
import Movie from "./Components/Movie";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Components/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// 우선 app에서는 loading중이라는 표시 홈화면에서는 어떤데이터 movie는 어떻게 할건지 전략을 짜야겠지??
// 그럼 생각해보자

// 오케이 여기서 부터는 되는거 다 적어보자 일단 라우터 만들려면?
