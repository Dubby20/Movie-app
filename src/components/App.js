import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import Movie from './Movie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="ABOUT"/>
        <Header title="SERVICES"/>
        <div className="responsive">
        <Movie title="Spiderman"
        year="2005"
        description=""
        imgUrl="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
        />
        <Movie title="Man of Steel"
        year="2006"
        description=""
        imgUrl="https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
/>
<Movie title="Iron man"
        year="2007"
        description=""
        imgUrl="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
/>
<Movie title="Man Van Staal"
        year="2008"
        description=""
        imgUrl="https://images-na.ssl-images-amazon.com/images/M/MV5BZDg5MTViODgtOTg2My00ZmExLWIxYmMtNjJkZTJmZThjNTYzXkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg"
/>
        </div>
      </div>
    );
  }
}

export default App;
