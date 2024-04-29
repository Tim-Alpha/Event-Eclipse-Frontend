import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/auth" element={<Registration />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App