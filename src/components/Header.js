import React, { Component } from 'react';


class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <header className="App-header">
          <p>
            {this.props.title}
          </p>
        </header>
    )
  }
}

export default Header;