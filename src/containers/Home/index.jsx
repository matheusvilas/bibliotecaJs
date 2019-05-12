import React, { Component } from "react";
import Actions, { fetchAllPosts } from "../../actions";
import { connect } from "react-redux";
// import { getAll } from "./api";
import BookRack from "../../components/BookRack";
import Book from "../../components/Book";

class Home extends Component {
  componentDidMount = () => {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
    console.log("eu vivo");
    console.log(this.props);
  };

  onChange = updBook => {
    this.props.rateTheBook(updBook);
  };

  onDelete = deleteBook => {
    this.props.removeTheBook(deleteBook);
  };

  render() {
    const { books, bookRack } = this.props;

    console.log("books", books);
    return (
      <div className="home">
        {bookRack.map(rack => (
          <BookRack key={rack.id} title={rack.title} bookCount={2}>
            {books.map(book =>
              rack.id === book.bookRack ? (
                <Book
                  key={book.id}
                  book={book}
                  onChange={this.onChange}
                  onDelete={this.onDelete}
                />
              ) : null
            )}
          </BookRack>
        ))}
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(Actions.updateName(name)),
  rateTheBook: book => dispatch(Actions.rateTheBook(book)),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
