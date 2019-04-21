const initialState = {
  bookCount: 3,
  books: [
    {
      id: 1,
      name: "Nome do vento",
      rate: 5,
      author: "Patrick Rothuss",
      imageUrl:
        "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2659801&qld=90&l=430&a=-1=1006695900"
    },
    {
      id: 2,
      name: "IT - A coisa",
      rate: 5,
      author: "Stephen King",
      imageUrl:
        "http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=7697879&qld=90&l=430&a=-1"
    },
    {
      id: 3,
      name: "Outsider",
      rate: 5,
      author: "Stephen King",
      imageUrl:
        "http://statics.livrariacultura.net.br/products/capas_lg/223/2000138223.jpg"
    }
  ]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SET_NEW_NAME":
      return { ...newState, name: action.name };
    case "ADD_NEW_BOOK":
      return {
        ...newState,
        books: action.books
      };
    case "RATE_THE_BOOK":
      return {
        ...newState,
        books: newState.books.map(book =>
          book.id === action.book.id ? action.book : book
        )
      };
    default:
      return newState;
  }
};

export default reducer;
