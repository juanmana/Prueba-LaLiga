import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RouterApp from "./router";


export const App = () => {



  return (
   <>
        <RouterApp />
        <RouterApp />

  </>
  )
}



export default withRouter(
  connect(
    null,
    null
  )(App)
);
