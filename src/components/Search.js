import React, { Component } from 'react';

class Search extends Component{
  constructor(){
    super();
    this.state  = {
      input : ''
    }
    
  }


setValue = (e) =>{
this.setState({
input : e.target.value
});
this.props.submit(e.target.value)
  }

  handleClick =  (e) => {
this.props.submit(this.state.input)
e.preventDefault();
  }
  render() {
    return(
      <div>
        <form className="search-form" onSubmit={this.handleClick}>
          <input 
          value={this.state.value} 
          onChange={this.setValue}
          className="search-input"placeholder="Search for a Movie"/>
          <button className="search-button">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;