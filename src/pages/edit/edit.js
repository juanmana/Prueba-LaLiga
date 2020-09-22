
import React,{useState,useEffect} from "react";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { connect } from "react-redux";
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import get from "lodash/get";
import PropTypes from "prop-types";


export const Edit = (props) => {




const [users, setUsers] = useState({

    first_name: "",
    last_name: "",
    submitted: false,

})


useEffect(() => {

    const {id} = props.match.params;
    props.get(id);

    
}, [])






useEffect(() => {

    const { user } = users;
    setUsers({
                    first_name: get(user, "first_name", "") ,
                    last_name : get(user, "last_name", ""),
                }
        );

    
}, [])



const handleChange = e => {
    const { name, value } = e.target;
    setUsers({ [name]: value });
};


 const handleSubmit = e => {
    e.preventDefault();
    const {id} = props.match.params;
    setUsers({ submitted: true });
    const { first_name, last_name,avatar } = users;
    // stop here if form is invalid
    if (!(first_name && last_name)) {
        return;
    }
    // call saga reducer
    props.update(id,first_name, last_name)
};


const { loading } = props;
const { first_name, last_name, submitted  } = users;
const title = 'Edit';






    return (
        <div>
            
            <DefaultLayout title={title}>
        <PublicHead title={title} />
          <div className="form-box">
              <form name="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                          type="text"
                          name="first_name"
                          className={'form-input' + (submitted && !first_name ? ' error' : '')}
                          value={first_name}
                          onChange={handleChange}
                          disabled={loading}
                      />
                      {submitted && !first_name && (
                          <div className="error-block first_name">First Name is required.</div>
                      )}
                  </div>
                  <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                          type="text"
                          name="last_name"
                          className={'form-input' + (submitted && !last_name ? ' error' : '')}
                          value={last_name}
                          onChange={handleChange}
                          disabled={loading}
                      />
                      {submitted && !last_name && (
                          <div className="error-block last_name">Last Name is required.</div>
                      )}
                  </div>
                  <div className="form-group">
                      <button className="form-btn" disabled={loading}>
                          {loading ? <><i className="fas fa-spinner  fa-spin"/> loading ...</> : "Save"}
                      </button>
                  </div>
              </form>
          </div>
      </DefaultLayout>
    



        </div>
    )
}


const mapStateToProps = state => ({
    loading: state.edit.loading,
    user: state.edit.user
  });
  const mapDispatchToProps = dispatch => {
    const { get , update  } = actions;
    return bindActionCreators({ get, update }, dispatch);
  };
  Edit.propTypes = {
      loading : PropTypes.bool,
      user : PropTypes.object,
      get: PropTypes.func,
      update: PropTypes.func,
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit);