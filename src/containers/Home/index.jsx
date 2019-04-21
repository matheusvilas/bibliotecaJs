import React, { Component } from "react";
import Actions from "../../actions";
import { connect } from "react-redux";
// import { getAll } from "./api";
import BookRack from "../../components/BookRack";
import Book from "../../components/Book";

class Home extends Component {
  // componentDidMount = async () => {
  //   // const apiResult = await getAll();
  //   // this.props.updateName(apiResult);
  // };

  onChange = updBook => {
    this.props.rateTheBook(updBook);
  };
  // onChange(updBook) =>

  render() {
    const { books } = this.props;
    return (
      <div className="home">
        <BookRack title="Livros lidos">
          {books.map(book => (
            <Book key={book.id} book={book} onChange={this.onChange} />
          ))}
        </BookRack>

        {/* {JSON.stringify(this.props)} */}
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(Actions.updateName(name)),
  rateTheBook: book => dispatch(Actions.rateTheBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
