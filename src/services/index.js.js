import axios from "axios";
import * as config from "../config";
import { store } from "../../store";
import { push } from "react-router-redux";


axios.defaults.baseURL = config.API_URL;

export const getUsers = (url) =>


    axios
      .get(url)
      .then(res=>res)
      .catch(err=>{
          throw err
      });



      export const updateUsers = (params) =>
  axios
    .post(params.url, params.data)
    .then(res => res)
    .catch(error => {
      throw error;
    });


    export const deleteUser = (url) =>
  axios
    .delete(url)
    .then(res => res)
    .catch(error => {
      throw error;
    });


    const action = type => store.dispatch({ type });
    export const logOut = () => {
      localStorage.removeItem("authToken");
      action("USER_LOGOUT");
      store.dispatch(push("/login"));
    };