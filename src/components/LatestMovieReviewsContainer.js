import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '07279a6ae611432a9ea61ac19d1fc856';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))

  }

  render(){
    return (
      <div className="latest-movie-reviews">
      <h2>The Latest Reviews</h2>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
