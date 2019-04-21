import React, { Component } from "react";
import Actions from "../../actions";
import { connect } from "react-redux";

import BookRack from "../../components/BookRack";

class Register extends Component {
  componentDidMount = async () => {
    // const apiResult = await getAll();
    // this.props.updateName(apiResult);
  };
  render() {
    // console.log();
    return (
      <div className="Register ">
        <BookRack />

        {JSON.stringify(this.props.name)}
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(Actions.updateName(name)),
  rateBook: book => dispatch(Actions.rateBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
