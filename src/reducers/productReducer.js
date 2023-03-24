export const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_FETCH":
      return { ...action.payload };
    case "COMMENT_ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
              email: action.userEmail,
            },
          },
        ],
      };
    default:
      return state;
  }
};
