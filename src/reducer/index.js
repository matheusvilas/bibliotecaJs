const initialState = {
  bookCount: 3,
  books: [
    // {
    //   id: 1,
    //   name: "Nome do vento",
    //   bookRack: 1,
    //   rate: 5,
    //   author: "Patrick Rothuss",
    //   imageUrl:
    //     "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2659801&qld=90&l=430&a=-1=1006695900"
    // }
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
    case "FETCH_BOOK":
      let newBooks = [];
      action.books.map(book => {
        newBooks[book.id] = {
          id: book.id,
          name: book.title.rendered,
          author: book.acf.autor,
          imageUrl: book.acf.imagem,
          bookRack: 1
        };
      });

      return {
        ...newState,
        books: newBooks
      };
    default:
      return newState;
  }
};

export default reducer;
