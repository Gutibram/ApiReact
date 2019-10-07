import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  static propTypes = {
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      img:PropTypes.string.isRequired
  }

render(){
    return(
      <div className="row card-padding">
        <div className="card width-card">
          <img src={this.props.img} className="card-img-top" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Movie;
