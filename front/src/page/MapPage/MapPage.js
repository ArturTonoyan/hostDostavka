import { useEffect, useState } from "react";
import styles from "./MapPage.module.scss";
import { Placemark, YMaps } from "react-yandex-map";
import { GeolocationControl, Map, ZoomControl } from "react-yandex-map";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MapPage() {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`${latitude}, ${longitude}`);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const getAddress = async (coor) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            lat: coor[0],
            lon: coor[1],
            format: "json",
            addressdetails: 1,
          },
        }
      );
      console.log("response", response);
      setAddress(response.data.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };
  useEffect(() => {
    if (location) {
      getAddress(location.split(", "));
      console.log("address", address);
    }
  }, [location]);

  const handleMapClick = (event) => {
    const coordinates = event.get("coords");
    console.log(coordinates);
    setSelectedLocation(coordinates);
    getAddress(coordinates);
  };

  return (
    <div className={styles.MapPage}>
      <div className={styles.map}>
        <YMaps query={{ apikey: "f3c78576-996b-4eaa-84f8-12a8520d276a" }}>
          <Map
            width={"100%"}
            height={"100%"}
            defaultState={{
              center: [47.22669536497173, 38.906188431719805],
              zoom: 10,
            }}
            options={{
              minZoom: 4,
            }}
            onClick={handleMapClick}
          >
            <GeolocationControl options={{ float: "left" }} />
            <ZoomControl options={{ float: "left" }} />
            {selectedLocation && (
              <Placemark
                geometry={selectedLocation}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "./img/metka.svg",
                  iconImageSize: [52, 52],
                  iconImageOffset: [-20, -55],
                }}
              />
            )}
          </Map>
        </YMaps>
      </div>

      <div className={styles.menuBotoom}>
        <h2>Куда привезти еду?</h2>
        <input type="text" placeholder={"Введите адрес"} value={address} />
        <button onClick={() => navigate(-1)}>Доставить сюда</button>
      </div>
    </div>
  );
}

export default MapPage;
