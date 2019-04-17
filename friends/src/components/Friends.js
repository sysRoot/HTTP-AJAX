import React from 'react';

const Friends = (props) => {
  return (
    <>
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