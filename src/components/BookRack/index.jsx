import React, { Component, Fragment } from "react";

export default class BookRack extends Component {
  render() {
    const { children, title, bookCount } = this.props;
    return (
      <Fragment>
        <div className="bookRack">
          <h2>
            {title} - ({bookCount})
          </h2>
          <ol className="books-list">{children}</ol>
        </div>
      </Fragment>
    );
  }
}
