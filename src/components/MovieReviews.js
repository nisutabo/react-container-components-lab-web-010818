// Code MovieReviews Here
import React from 'react';

const Review  = ({byline, headline, display_title, link, summary_short}) => {
  return (
    <div className="review">
      <h2>{display_title}</h2>
      <a href={link.url}>{headline}</a>
      <h4>Author: {byline}</h4>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
