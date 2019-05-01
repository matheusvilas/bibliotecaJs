const initialState = {
  bookCount: 3,
  books: [
    {
      id: 1,
      name: "Nome do vento",
      bookRack: 1,
      rate: 5,
      author: "Patrick Rothuss",
      imageUrl:
        "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2659801&qld=90&l=430&a=-1=1006695900"
    },
    {
      id: 2,
      name: "IT - A coisa",
      bookRack: 2,
      rate: 5,
      author: "Stephen King",
      imageUrl:
        "http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=7697879&qld=90&l=430&a=-1"
    },
    {
      id: 3,
      name: "Outsider",
      bookRack: 3,
      rate: 5,
      author: "Stephen King",
      imageUrl:
        "http://statics.livrariacultura.net.br/products/capas_lg/223/2000138223.jpg"
    }
  ],
  bookRack: [
    {
      id: 1,
      title: "Lendo"
    },
    {
      id: 2,
      title: "Lidos"
    },
    {
      id: 3,
      title: "Parados"
    }
  ]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log("newState", newState);
  switch (action.type) {
    case "ADD_NEW_BOOK":
      return {
        ...newState,
        bookCount: newState.bookCount++,
        books: [...newState.books, action.book]
      };
    case "RATE_THE_BOOK":
      return {
        ...newState,
        books: newState.books.map(book =>
          book.id === action.book.id ? action.book : book
        )
      };
    case "REMOVE_THE_BOOK":
      return {
        ...newState,
        bookCount: newState.bookCount - 1,
        books: newState.books.filter(book => book.id !== action.book.id)
      };
    default:
      return newState;
  }
};

export default reducer;
