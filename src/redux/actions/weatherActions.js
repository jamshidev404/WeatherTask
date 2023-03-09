export const setWeather = (data) => {
  return {
    type: "WEATHER",
    payload: data,
  };
};
