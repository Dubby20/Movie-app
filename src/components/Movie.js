import React, { Component } from 'react';


class Movie extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <div className="img-fluid">
          <header>
            <h2>{this.props.name}</h2>
            <img src={this.props.imgUrl} alt="" />
            <p>{this.props.year}</p>
            <p>{this.props.type}</p>
            <p>{this.props.imdbID}</p>
          </header>
        </div>
    
    )
  }
}


export default Movie;