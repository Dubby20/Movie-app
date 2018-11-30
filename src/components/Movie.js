import React, { Component } from 'react';


class Movie extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div >
          <header>
            <h1>{this.props.title}</h1>
            <img src={this.props.imgUrl} className="img-fluid" />
            <p>{this.props.year}</p>
            <p>{this.props.description}</p>
          </header>
        </div>
      </div>
    )
  }
}


export default Movie;