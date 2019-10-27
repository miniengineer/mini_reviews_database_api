import React from 'react';
import FanficsList from './FanficsList';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      fanfics: null,
      keywords: null
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




  render() {
    return (
      <div>
        {
          this.state.isLoading ? <img alt="loading_cat" src="loading_cat.gif"></img> : null
        }
        {
          this.state.fanfics ? <ul><FanficsList fanfics={this.state.fanfics} /></ul> : null
        }
      </div>
    );
  }
}

export default App;
