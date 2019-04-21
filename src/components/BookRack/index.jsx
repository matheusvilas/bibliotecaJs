import React, { Component, Fragment } from "react";

export default class BookRack extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <Fragment>
        <div className="bookRack">
          <h2>{title}</h2>
          <ol className="books-list">{children}</ol>
        </div>
      </Fragment>
    );
  }
}
