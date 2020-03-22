import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div class="center">
        <card>
          <h2>No Users found</h2>
        </card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          places={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
