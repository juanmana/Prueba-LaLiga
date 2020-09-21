import React from "react";
import * as actions from "./actions";
import { connect } from "react-redux";
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'







export const AddUsers = (props) => {



    const [users, setUsers] = useState({

        first_name: "",
        last_name: "",
        submitted: false,

    });


    handleChange = e => {
        const { name, value } = e.target;
        setUsers({ [name]: value });
    };


    handleSubmit = e => {
        e.preventDefault();
        setUsers({ submitted: true });
        const { first_name, last_name} = users;

        if (!(first_name && last_name)) {
            return;
        }
        props.set(first_name, last_name)
    };

         
    const { loading } = props;
    const { first_name, last_name ,submitted  } = users;
    const title = 'Add';

   
    return (

        <div>

      <DefaultLayout title={title}>
        <PublicHead title={title} />
          <div className="form-box">
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                          type="text"
                          name="first_name"
                          className={'form-input' + (submitted && !first_name ? ' error' : '')}
                          value={first_name}
                          onChange={this.handleChange}
                          disabled={loading}
                          placeholder="Mohsen"
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
                          onChange={this.handleChange}
                          disabled={loading}
                          placeholder="Barati"
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
    
    )}


    const mapStateToProps = state => ({
        loading: state.edit.loading
      });
      const mapDispatchToProps = dispatch => {
        const {  set  } = actions;
        return bindActionCreators({ set }, dispatch);
      };
      Add.propTypes = {
          loading : PropTypes.bool,
          set: PropTypes.func,
      };
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(AddUsers);
      
            
     
