import React, { Component } from 'react';
class NewPoll extends Component{
    state={
            name:null,
            releasedYear:null,
            director:null,
            img:"",
            key:Math.random()*10
        }
    handleChange = (e) =>{
        this.setState({[e.target.id]:e.target.value});
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.newPoll(this.state);
    }
    render(){
      return(
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Film Title</label>
            <input type="text" id="name" name="name" onChange={ this.handleChange }></input>
            <label htmlFor="releasedYear">Film Released Year</label>
            <input type="text" id="releasedYear" name="releasedYear" onChange={ this.handleChange }></input>
            <label htmlFor="director">Director Of The Film:</label>
            <input type="text" id="director" name="director" onChange={ this.handleChange }></input>
            <input type="submit"></input>
          </form>
      )
    }
}
export default NewPoll
