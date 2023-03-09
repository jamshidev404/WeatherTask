import React from "react";
import styles from "./Weather.module.scss";
import lupa from "../images/lupa.png";
import {
  WiNightCloudyWindy,
  WiCloud,
  WiHumidity,
  WiRain,
} from "react-icons/wi";
import { region, regions } from "../mock";
import { useSelector } from "react-redux";

const day = new Date();
const hours = day.getUTCHours();
const minute = day.getMinutes();
const getWeek = day.toDateString();

function Weather({ location, setLocation, searchLocation, photos }) {
  const data = useSelector((state) => state.data) || {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.weather__wrapper}>
          {/* ========================= Left Side ========================== */}
          <div
            className={styles.left}
            style={{ backgroundImage: `url(${photos})` }}
          >
            <div className={styles.top__text}>The weather</div>
            <div className={styles.top}>
              <div className={styles.temp}>
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
              <div className={styles.location}>
                <p className={styles.city__name}>
                  {data.name}
                  {data.sys ? (
                    <sup className={styles.sup}>{data.sys.country}</sup>
                  ) : null}
                </p>
                <span className={styles.time}>
                  {hours + data.timezone / 3600}: {minute} - {getWeek}
                </span>
              </div>
              <div className={styles.description}>
                <img
                  style={{ margin: "-15px", width: "80px" }}
                  src={`http://openweathermap.org/img/wn/${
                    data && data.weather && data.weather[0].icon
                  }@2x.png`}
                />
                {data.weather ? (
                  <p className={styles.desc}>{data.weather[0].description}</p>
                ) : null}
              </div>
            </div>
          </div>

          {/* ========================= Right Side ========================== */}
          <div className={styles.right}>
            <div className={styles.search}>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder='Enter Location'
                type='text'
              />
              <div
                onClick={() => searchLocation(location)}
                className={styles.lupa}
              >
                <img src={lupa} alt='lupa' />
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.regions__title}>Regions</div>
            <div className={styles.regions__wrapper}>
              <ul className={styles.regions}>
                {region.map((el) => (
                  <li
                    className={styles.region}
                    onClick={() => {
                      searchLocation(el.name);
                    }}
                    key={el.name}
                  >
                    {el.name}
                  </li>
                ))}
              </ul>
              <ul className={styles.regions}>
                {regions.map((el) => (
                  <li
                    className={styles.region}
                    onClick={(e) => {
                      searchLocation(el.name);
                    }}
                    key={el.name}
                  >
                    {el.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.details}>
              <div className={styles.bottom__title}>Weather Details</div>
              <div className={styles.detail__wrapper}>
                <div className={styles.detail__items}>
                  <div>Cloudly</div>
                  {data.clouds ? (
                    <div>
                      <WiCloud /> {data.clouds.all} %
                    </div>
                  ) : (
                    "Data not found"
                  )}
                </div>
                <div className={styles.detail__items}>
                  <div>Humidity</div>

                  {data.main ? (
                    <div>
                      <WiHumidity /> {data.main.humidity} %{" "}
                    </div>
                  ) : (
                    "Data not found"
                  )}
                </div>
                <div className={styles.detail__items}>
                  <div>Wind</div>

                  {data.wind ? (
                    <div>
                      <WiNightCloudyWindy /> {data.wind.speed} m/s
                    </div>
                  ) : (
                    "Data not found"
                  )}
                </div>
                <div className={styles.detail__items}>
                  <div>Feels_like</div>
                  {data.main ? (
                    <div>
                      <WiRain />
                      {data.main.feels_like} C
                    </div>
                  ) : (
                    "Data not found"
                  )}
                </div>
              </div>

              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
