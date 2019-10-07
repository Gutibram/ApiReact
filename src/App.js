import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/movies';

class App extends Component{

  render() {
     return (
       <div className="App container">
         {this.state.movies = this._render()}
       </div>
     );
   }

  properties = {
    apiKey: '14bf4114036304fed0a6581f7ddbf2e0',
    url : 'discover/movie?sort_by=popularity.desc&page=1',
    imgUrl: 'https://image.tmdb.org/t/p/w500'
  }

  state = {
    movies: []
  }

  componentDidMount() {
     this._getListOfMovies();
  }


   _getListOfMovies = async() => {
    this.setState({
      movies: await this._getData()
    })
  }

  _render = () => {
    if(this.state.movies.results){
      const movies = this.state.movies.results.map((movie, index) => {
        return <Movie title={movie.original_title} img={this.properties.imgUrl+movie.poster_path} overview={movie.overview} key={index}/>
      })
      return movies;
    }
   }

  _getData = () => {
    return fetch('https://api.themoviedb.org/3/' + this.properties.url + '&api_key=' + this.properties.apiKey)
    .then((response) => {
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
  }

}


export default App;
