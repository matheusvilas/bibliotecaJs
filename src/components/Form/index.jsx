import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const { onSubmit } = this.props;
    // console.log(onSubmit);
    return (
      <form>
        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" />

        <label htmlFor="url">Url </label>
        <input type="text" id="url" />

        <label htmlFor="autor">Autor</label>
        <input type="text" id="autor" />

        <button type="button" onClick={() => onSubmit()}>
          Salvar
        </button>
      </form>
    );
  }
}
