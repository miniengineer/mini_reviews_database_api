import React from 'react';
import ReviewsList from './ReviewsList';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      reviews: null,
      title: "",
      author: "",
      rating: "",
      product: "",
      text: ""
    };

    //get all reviews from DB
    axios.get("/reviews").then(reviews => {
      console.log(reviews);
      let reviewsArray = [];
      for(const review of reviews.data) {
        reviewsArray.push(review);
      }
      this.setState({
        reviews: reviewsArray
      });
    });

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 4000);
  }

  //save a new review info
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //delete review from db and update the state
  handleDelete = (id) => {
    axios.delete(`/review/${id}`).then((response) => {
      this.setState({
        reviews: response.data
      });
    });
  }

  //once new review is submitted, send it to db and update the state
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      review_title: this.state.title,
      name: this.state.author,
      product: this.state.product,
      review_text: this.state.text,
      rating: Number(this.state.rating)
    };

    axios.post("/review", newReview).then((response) => {
      const addedReview = [...response.data];
      this.setState({
        reviews: addedReview,
        title: "",
        author: "",
        text: "",
        rating: "",
        product: ""
      });
    });
  }


  render() {
    return (
      <div>
        <header>Mini Reviews Database</header>
        {
          this.state.isLoading ? <img alt="loading_cat" src="loading_cat.gif"></img> : null
        }
        {
          this.state.reviews && !this.state.isLoading ?
          <div>
            <ul><ReviewsList reviews={this.state.reviews} onDelete={this.handleDelete} /></ul>
            <div className="add-review-form">
         <form>
            <label>Author: <input name="author" value={this.state.author} type="text" className="review_input" autoComplete="off" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Product: <input name="product" value={this.state.product} type="text" className="review_input" autoComplete="off" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Title: <input name="title" value={this.state.title} type="text" className="review_input" autoComplete="off" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Review: <input name="text" value={this.state.text} type="text" className="review_input" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Rating: <input name="rating" value={this.state.rating} type="text" className="review_input" autoComplete="off" onChange={(event) => this.handleInputChange(event)}></input></label>
            <button className="add-review-btn" onClick={(event) => this.handleFormSubmit(event)}>Submit</button>
         </form>
        </div>
          </div>
           : null
        }
      </div>
    );
  }
}

export default App;
