import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      fanfics: null,
      keywords: null,
    }
  }


  render() {
    return (
      <div>
        {
          this.state.isLoading ? <img alt="loading_cat" src="loading_cat.gif"></img> : null
        }
      </div>
    );
  }
}

export default App;
