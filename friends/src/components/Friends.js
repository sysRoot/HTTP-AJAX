import React from "react";

const Friends = props => {
  return (
    <>
      <h2>Friends List</h2>
      <form action="submit" onSubmit={props.addFriend}>
        <input
          type="text"
          name="name"
          onChange={props.changer}
          value={props.name}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          onChange={props.changer}
          value={props.age}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          onChange={props.changer}
          value={props.email}
          placeholder="E-Mail"
        />
        <button type="submit">Add Friend</button>
      </form>
      {props.friends.map(cur => {
        return (
          <div key={cur.id}>
            <p>{cur.name}</p>
            <p>{cur.age}</p>
            <p>{cur.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Friends;
