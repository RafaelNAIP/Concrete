import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/login";
import Main from "./pages/main";
import notFound from "./pages/notFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main/:id" exact component={Main} />
      <Route path="/notFound" component={notFound} />
    </BrowserRouter>
  );
}
