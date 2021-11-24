import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import UserList from "./Components/UserList/UserList";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err));  
  }, []);
  return <div className="App">
  <NavBar />
  <UserList userData={userData} />
  </div>;
}

export default App;
