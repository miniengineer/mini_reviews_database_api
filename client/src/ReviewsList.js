import React from 'react';

function ReviewsList(props) {
  return props.reviews.map((review, i) => {
      return (<li key={i}>
       <div className='review-container'>
         <h3>Author: {review.name}</h3>
         <h4>Title: {review.review_title} <br></br> Product: {review.product}</h4>
         <p>{review.review_text}</p>
         <p>Rating: {review.rating}</p>
         <p>date: {review.created_at} </p>
         <h3><button className="delete-review-btn" onClick={() => props.onDelete(review.id)}>Delete</button></h3>
       </div>
      </li>);
  });
}


export default ReviewsList;
