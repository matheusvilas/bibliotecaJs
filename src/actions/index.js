const types = {
  ADD_NEW_BOOK: "ADD_NEW_BOOK",
  RATE_THE_BOOK: "RATE_THE_BOOK",
  REMOVE_THE_BOOK: "REMOVE_THE_BOOK"
};

const actions = {
  addNewBook: book => ({
    type: types.ADD_NEW_BOOK,
    book
  }),
  rateTheBook: book => ({
    type: types.RATE_THE_BOOK,
    book
  }),
  removeTheBook: book => ({
    type: types.REMOVE_THE_BOOK,
    book
  })
};

export default actions;
