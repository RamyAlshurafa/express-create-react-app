import React from 'react';

const Home = props => {
  return (
    <div className="">
      <h1>
        HOME PAGE
        </h1>
      <p>Welcome home, {props.user}</p>
    </div>
  );
}


export default Home;
