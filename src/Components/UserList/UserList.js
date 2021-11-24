import React from "react";
import UserCard from "../UserCard/UserCard";

const UserList = ({ userData }) => {
  return (
    <div className='list'>
      {userData.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </div>
  );
};

export default UserList;
