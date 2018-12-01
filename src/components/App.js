import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search"
import spinner from "../images/loader.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search:  'man',
      loading: true
    };
  }

  componentDidMount(){
    this.searchMovie();
  }
    
    searchMovie(){
      this.setState({loading: true});
      // eslint-disable-next-line no-template-curly-in-string
      fetch(`http://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(jsonb => {
        this.setState({
          movies:jsonb.Search ||  [],
          loading: false
        })
      }).catch(error=> {
      })
    }

    submitSearch = (input) => {
this.setState({search: input}, () => {
  this.searchMovie() 
})
 }
  render() {
    return (
      <div className="App">
        <Header title="ABOUT" />
        <h1>Jacinta's Movie Collection</h1>
        <Search submit={this.submitSearch}/>
        <div className="responsive">
        {this.state.loading ? (<img src={spinner} alt="" className="spin"/>) : 
          (this.state.movies.map((movie, i) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <Movie key={i}
                name={movie.Title}
                year={movie.Year}
                type={movie.Type}
                imgUrl={movie.Poster}
                imb= {movie.ImdbID}
              />
            );
          }))}
        </div>
      </div>
    );
  }
}

export default App;
