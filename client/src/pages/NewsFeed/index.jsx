import React, { Fragment } from 'react';

const NewsFeed = ({ newsItems }) => {
  const newsCards = newsItems.map(item => {
    return (
      <Fragment>
        <h2>{item.title}</h2>
        <p>
          {item.text}
        </p>
      </Fragment>
    )
  })

  return (
    <div className="">
      <h1>
        News Feed
        </h1>
      {newsCards}
    </div>
  );
}


export default NewsFeed;
