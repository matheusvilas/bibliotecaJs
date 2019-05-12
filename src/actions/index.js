import Api from "../api";
const types = {
  ADD_NEW_BOOK: "ADD_NEW_BOOK",
  RATE_THE_BOOK: "RATE_THE_BOOK",
  REMOVE_THE_BOOK: "REMOVE_THE_BOOK",
  FETCH_BOOK: "FETCH_BOOK"
};

export const fetchAllPosts = () => {
  return dispatch => {
    return Api.get("/books")
      .then(response => {
        console.log("response", response.data);
        dispatch(actions.fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

const actions = {
  fetchPosts: books => {
    return {
      type: types.FETCH_BOOK,
      books
    };
  },
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
