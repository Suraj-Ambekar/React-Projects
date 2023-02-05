// import logo from './logo.svg';
// import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
// import UserInfo from "./components/UserInfo";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUL) => {
      return [...prevUL, {name: uName, age: uAge, id: Math.random.toString()}]
    })
  }

  return (
    <div className="App">
      < AddUser onAddUser={addUserHandler} />
      < UsersList users={usersList} />
    </div>
  );
}

export default App;
