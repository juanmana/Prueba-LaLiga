import React,{useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {startGetUsers} from './redux/actions/users'

function App(props) {


  const dispatch = useDispatch();
  const [users , setUsers] = useState([])

  useEffect(()=>{

    if(users.length === 0){
     dispatch(startGetUsers())
    setUsers([{},{}]);
    }

  })

  return (
    <div className="App">
      Redux
    </div>
  );
}

export default App;
