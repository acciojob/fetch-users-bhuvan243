import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import "./App.css";

const App = () => {
  const [usersData, setUsersData] = useState([])
  const [show, setShow] = useState(false)

  function showUsersList(){
    setShow(true);
  }
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {/* Do not remove the main div */}
      <div className="header">
        <span>Blue Whales</span>
        <button className=".btn" onClick={showUsersList}>Get User List</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          {
            show && <tbody>
            {/* <tr>
              <td>george</td>
              <td>bulth</td>
              <td>gb@123</td>
              <td>
                <img
                  alt="avatar"
                  src="https://i.pinimg.com/474x/21/8a/c3/218ac38b88313924dadaffdaafc3293c.jpg"
                />
              </td>
            </tr> */}
            {
              usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      alt={user.first_name}
                      src={user.avatar}
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
          }
        </table>
      </div>
    </div>
  );
};

export default App;
