import React, { Component } from 'react';

const Home = { newsItems } => {
  const newsCards = newsItems.map(item => <h2>{item.header}</h2> <br><p>{item.text}</p>)
  return (
    <div className="">
      <h1>
        News Feed
        </h1>
      {newsCards}
    </div>
    );
}


export default Home;
