import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Alex",
      image:
        "https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Nice-Whatsapp-Dp-Profile-Images-101-300x300.jpg",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
