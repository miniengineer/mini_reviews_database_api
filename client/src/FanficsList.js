import React from 'react';

function FanficsList(props) {
  console.log(props.fanfics);
  for (const fanfic of props.fanfics) {
    return <h1>{fanfic.title}</h1>;
  }
}

export default FanficsList;
