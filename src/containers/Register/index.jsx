import React, { Component } from "react";
import Actions from "../../actions";
import { connect } from "react-redux";
import Form from "../../components/Form";
class Register extends Component {
  componentDidMount = async () => {
    // const apiResult = await getAll();
    // this.props.updateName(apiResult);
  };

  onSubmit = () => {
    const newBook = {
      id: 4,
      name: "Outsider",
      bookRack: 3,
      rate: 1,
      author: "Stephen King",
      imageUrl:
        "http://statics.livrariacultura.net.br/products/capas_lg/223/2000138223.jpg"
    };

    this.props.addNewBook(newBook);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} />
      </>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  rateBook: book => dispatch(Actions.rateBook(book)),
  addNewBook: book => dispatch(Actions.addNewBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
