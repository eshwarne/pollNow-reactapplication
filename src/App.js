import React, { Component } from 'react';
import Films from './Films';
class App extends Component {
  state={
    films:[
      {
        name:"Status Updated",
        releasedYear:2015,
        director:"Eshwar NE",
        img:"",
        key:1
      },
      {
        name:"Saavi",
        releasedYear:2016,
        director:"Eshwar NE",
        img:"",
        key:2
      },
      {
        name:"CODER",
        releasedYear:2017,
        director:"Eshwar NE",
        img:"",
        key:3
      },
      {
        name:"Multiverse",
        releasedYear:2018,
        director:"Eshwar NE",
        img:"",
        key:4
      }
    ]
  }
  render() {
    return (
    
      <Films films={ this.state.films } />
      
    );
  }
}

export default App;
