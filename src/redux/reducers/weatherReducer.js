const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "weather":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
