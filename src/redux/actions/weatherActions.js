export const setWeather = (data) => {
  return {
    type: "weather",
    payload: data,
  };
};
