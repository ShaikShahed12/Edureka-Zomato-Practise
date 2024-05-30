import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Details from "./Details";
import Filter from "./Filter";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {" "}
            {/* Wrap your Route components in Routes */}
            <Route exact path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
