import React from "react";
import { Route } from "react-router-dom";
import Form from './form/form'

const Routes = (props) => {
  return (
    <main>
      <Route path='/' exact>
          <Form handler = {props.handler} />
      </Route>
      <Route path="/history" exact>
        <p> hello history </p>
      </Route>
    </main>
  );
};

export default Routes;
