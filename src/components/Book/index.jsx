import React, { Component, Fragment } from "react";
import StarRatingComponent from "react-star-rating-component";
export default class Book extends Component {
  onStarClick(nextValue, prevValue, name) {
    this.onChange(nextValue);
  }

  onChange(star) {
    const { onChange, book } = this.props;

    const newBook = {
      ...book,
      rate: star
    };
    onChange(newBook);
  }

  onDelete() {
    const { onDelete, book } = this.props;
    onDelete(book);
  }

  render() {
    const { name, author, imageUrl, rate, id } = this.props.book;

    return (
      <Fragment>
        <li className="book-single">
          <img className="book-img" src={imageUrl} alt={name} />
          <div className="book-info">
            <button className="book-engine" onClick={() => this.onDelete()}>
              X
            </button>
            <p>{author}</p>
            <StarRatingComponent
              name={`nota-${id}`}
              starCount={5}
              value={rate}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </li>
      </Fragment>
    );
  }
}
