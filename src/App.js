import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Weather from "./components/Weather";
import { createApi } from "unsplash-js";
import { setWeather } from "./redux/actions/weatherActions";

function App() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [photos, setPhotos] = useState(require("../src/images/2.jpg"));
  const searchLocation = (reg) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          reg || location
        }&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
      )
      .then((response) => {
        //dynamic photos
        const unsplash = createApi({
          accessKey: "gqV_1vvQFYJPCbekBH2r66Kx6uR3EJCGBasb_QnoBXw",
        });

        const query = response.data.weather[0].description;
        unsplash.search
          .getPhotos({
            query,
            page: 1,
            perPage: 1,
            orientation: "landscape",
          })
          .then((e) => setPhotos(e.response.results[0].urls.full));
        return response;
      })
      .then((response) => {
        dispatch(setWeather(response.data));
        setLocation("");
      });
  };

  useEffect(() => {
    // default location
    searchLocation("Tashkent");
  }, []);

  return (
    <>
      <Weather
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
        photos={photos}
      />
    </>
  );
}

export default App;
