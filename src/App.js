import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RouterApp from "./router";
import GlobalStyle from "./theme/injectGlobal";


export const App = () => {



  return (
   <>
        <GlobalStyle />
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
