import React from 'react';
import FanficsList from './FanficsList';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      fanfics: null,
      keywords: null,
      title: null,
      author: null,
      genre: null,
      url: null
    };

    //get all fanfics from DB
    axios.get("http://localhost:3000/fanfics").then(fanfics => {
      let fanficsArray = [];
      for(const fanfic of fanfics.data) {
        fanficsArray.push(fanfic);
      }
      this.setState({
        fanfics: fanficsArray
      });
    });

    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false
    //   });
    // }, 500);


  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newFanf = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      fanfic_url: this.state.url
    }

    axios.post("http://localhost:3000/fanfic", newFanf).then((response) => {
      const addedFanf = [...this.state.fanfics, ...response.data];
      this.setState({
        fanfics: addedFanf,
        title: "",
        author: "",
        genre: "",
        url: ""
      });
    });
  }


  render() {
    return (
      <div>
        {
          this.state.isLoading ? <img alt="loading_cat" src="loading_cat.gif"></img> : null
        }
        {
          this.state.fanfics ? <ul><FanficsList fanfics={this.state.fanfics} /></ul> : null
        }
        <div className="add-fanf-form">
         <form>
            <label>Title: <input name="title" type="text" className="fanfic_input" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Author: <input name="author" type="text" className="fanfic_input" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>Genre: <input name="genre" type="text" className="fanfic_input" onChange={(event) => this.handleInputChange(event)}></input></label>
            <br></br>
            <label>URL: <input name="url" type="text" className="fanfic_input" onChange={(event) => this.handleInputChange(event)}></input></label>
            <button className="add-fanf-btn" onClick={(event) => this.handleFormSubmit(event)}>Add Fanfic</button>
         </form>
        </div>
      </div>
    );
  }
}

export default App;
