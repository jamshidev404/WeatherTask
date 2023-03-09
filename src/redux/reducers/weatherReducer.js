export const  WEATHER = "WEATHER"


const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
