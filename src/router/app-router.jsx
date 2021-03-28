import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchPage from "../pages/search/search.component";
import CollectionPage from "../pages/collection/collection.component";
import NotFoundPage from "../pages/not-found/not-found.component";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/collection/:id" component={CollectionPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;
