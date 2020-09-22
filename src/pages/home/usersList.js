import React,{useState,useEffect} from "react";
import UserLoading from "../../components/userLoading";
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Row, Avatar, UserInfo, Text } from "./styles";
import PropTypes from "prop-types";




export const UsersList = (props) => {




    useEffect(() => {

        if (props.total_pages >= props.next_page) {
            request();
          }

    }, [props.next_page])



    const handleLoadMore = e => {
        e.preventDefault();

        request();
      };


      const request = () => {
        props.get("&page=" + props.next_page);
      };
     const handleDelete = (id, e) => {
        e.preventDefault();
        const confirmed = window.confirm(
          "Are you sure you want to delete this user?"
        );
        if (confirmed) {
          props.deleteItem(id);
        }
      };


     const  renderFarm = (items =[]) => {
        return items.map((item, index) => {
          return (
            <Row key={index} id={item.id}>
              <Avatar>
                <img src={item.avatar} alt={item.first_name} />
              </Avatar>
              <UserInfo>
                <Text color={"firstname"} className='firstname'>{item.first_name}</Text>
                <Text color={"lastname"}  className='lastname'>{item.last_name}</Text>
              </UserInfo>
              <button
                className="btn delete"
                onClick={e => handleDelete(item.id, e)}
              >
                Delete
              </button>
              <NavLink exact to={`/user/${item.id}/edit`} className="btn edit">
                Edit
              </NavLink>
            </Row>
          );
        });
      };

      const { data, loading, next_page, total_pages, failure } = props;



     return (


        <>
        {renderFarm(data)}
        <UserLoading isLoading={loading} />
        <div style={{ textAlign: "center" }}>
          {total_pages >= next_page && !loading && (
            <button className="btn load_more" onClick={handleLoadMore}>
              Load more...
            </button>
          )}
          {failure && !loading && (
            <button className="btn try_again" onClick={handleLoadMore}>
              Try again
            </button>
          )}
        </div>
      </>

        
     )



    }

    // const mapStateToProps = (state) => ({
    //     loading: state.usersList.loading,
    //     failure: state.usersList.failure,
    //     data: state.usersList.data,
    //     next_page: state.usersList.next_page,
    //     total_pages: state.usersList.total_pages
    //   });
    //   const mapDispatchToProps = dispatch => {
    //     const { get, deleteItem } = actions;
    //     return bindActionCreators(
    //       { get, deleteItem },
    //       dispatch
    //     );
    //   };
    //   UsersList.propTypes = {
    //       loading : PropTypes.bool,
    //       failure: PropTypes.bool,
    //       data: PropTypes.array,
    //       next_page: PropTypes.number,
    //       total_pages: PropTypes.number,
    //       get: PropTypes.func,
    //       deleteItem: PropTypes.func,
    //   };
    //   export default connect(
    //     mapStateToProps,
    //     mapDispatchToProps
    //   )(UsersList);
      

