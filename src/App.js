import React, { useEffect } from "react";
import AppHeader from "./components/app-header/app-header.component";
import Modal from "./components/modal/modal.component";
import AppRouter from "./router/app-router";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { connect } from "react-redux";
import { getCollections } from "./redux/collections/collections.actions";

const App = (props) => {
  const { getCollections } = props;
  useEffect(() => {
    // when app mounts fetch users collections;
    getCollections();
  }, []);
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <AppRouter />
      </DndProvider>
      <Modal />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(getCollections()),
});

export default connect(null, mapDispatchToProps)(App);
