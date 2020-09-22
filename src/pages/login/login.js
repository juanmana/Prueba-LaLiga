
import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { connect } from "react-redux";
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


export const Login = (props) => {







const [login ,setLogin] = useState({
    email: "",
    password: "",
    submitted: false,

})


if(localStorage.getItem("authToken")){
    props.history.push('/')
}

const handleChange = e => {
    const { name, value } = e.target;
    setLogin({ [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLogin({ submitted: true });
    const { email, password } = login;
    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    props.attempt(email,password)
};



const { loading } = props;
    const { email, password, submitted  } = login;
    const title = "Login";


    return (



        <div>
            


            <DefaultLayout title={title}>
        <PublicHead title={title} />
        <div className="form-box">
          <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className={'form-input' + (submitted && !email ? ' error' : '')}
                value={email}
                onChange={handleChange}
              />
              {submitted && !email && (
                <div className="error-block  email">Email is required.</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={'form-input' + (submitted && !password ? ' error' : '')}
                value={password}
                onChange={handleChange}
              />
              {submitted && !password && (
                <div className="error-block password">Password is required.</div>
              )}
            </div>
            <div className="form-group">
              <button className="form-btn" disabled={loading}>
                  {loading ? <><i className="fas fa-spinner  fa-spin"/> loading ...</> : "Login"}
              </button>
            </div>
              <span>Don't have an account? <NavLink exact to='/signup'> Sign up</NavLink> </span>
          </form>
        </div>
      </DefaultLayout>




        </div>
    )
}



const mapStateToProps = state => ({
    loading: state.login.loading
  });
  const mapDispatchToProps = dispatch => {
    const { attempt  } = actions;
    return bindActionCreators({ attempt }, dispatch);
  };
  Login.propTypes = {
      loading : PropTypes.bool,
      attempt: PropTypes.func,
      history: PropTypes.shape({
          push: PropTypes.func.isRequired
      })
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  