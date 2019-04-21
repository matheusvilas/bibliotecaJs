const types = {
  SET_NEW_NAME: "SET_NEW_NAME",
  ADD_NEW_BOOK: "ADD_NEW_BOOK",
  RATE_THE_BOOK: "RATE_THE_BOOK"
};

const actions = {
  updateName: name => ({
    type: types.SET_NEW_NAME,
    name
  }),
  addNewBook: book => ({
    type: types.ADD_NEW_BOOK,
    book
  }),
  rateTheBook: book => ({
    type: types.RATE_THE_BOOK,
    book
  })
};

export default actions;
