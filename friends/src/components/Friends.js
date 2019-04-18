import React from 'react';

const Friends = (props) => {
  return (
    <>
    <form onSubmit={props.addFriend}>
    <h2>Friends List</h2>
    <input name="name" placeholder="Name"/>
    <input name="age" placeholder="Age"/>
    <input name="email" placeholder="E-Mail"/>
    </form>
    {props.friends.map(cur => {
      return (
        <div key={cur.id}>
        <p>{cur.name}</p>
        <p>{cur.age}</p>
        <p>{cur.email}</p>
        </div>
      )
      })}
    </>
  );
}

export default Friends;