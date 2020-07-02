import React from "react";
import { Route } from "react-router-dom";
import Form from "./form/form";
import History from "./history/history";

const Routes = (props) => {
  return (
    <main>
      <Route path="/" exact>
        <Form handler={props.handler} />
      </Route>
      <Route path="/history" url={props.url} exact>
        <History />
      </Route>
    </main>
  );
};

export default Routes;
