import React from 'react';

function FanficsList(props) {
  return props.fanfics.map((fanfic, i) => {
      return (<li key={i}>
       <div className='fanfic-container'>
         <h3>Title: {fanfic.title}</h3>
         <h4>Author: {fanfic.author} <br></br> Genre: {fanfic.genre}</h4>
         <h4>URL: {fanfic.fanfic_url}</h4>
       </div>
      </li>);
  });
}


export default FanficsList;
