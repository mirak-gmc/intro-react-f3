import React from "react";

const user = {
  name: "Jane Doe",
  age: 40,
  email: "john@gmail.com",
  isMale: false,
};

const UserCard = () => {
  return (
    <div className="user-card">
      <p className={user.isMale ? "color-red" : "color-pink"}>
        Name : {user.name.toUpperCase()}{" "}
      </p>
      <p>Age : {user.age} </p>
      <p>email : {user.email} </p>
    </div>
  );
};

export default UserCard;
