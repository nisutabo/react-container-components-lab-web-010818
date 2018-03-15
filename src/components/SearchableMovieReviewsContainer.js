// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'


const NYT_API_KEY = '07279a6ae611432a9ea61ac19d1fc856';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `api-key=${NYT_API_KEY}&query=`;



export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleInputChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(json => this.setState({reviews: json.results}))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}
