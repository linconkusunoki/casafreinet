import React from "react";
import styles from "./address.module.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const Address = ({
  title,
  street,
  number,
  bairro,
  city,
  state,
  cep,
  latitude,
  longitude
}) => {
  const [geoLat, setGeoLat] = React.useState(latitude);
  const [geoLon, setGeoLon] = React.useState(longitude);

  let rua = encodeURI(street.replace(/[\s]/gm, "+"));
  let cidade = encodeURI(city.replace(/[\s]/gm, "+"));
  let zip = cep.replace(/[.-]/gm, "");

  const api = `http://open.mapquestapi.com/geocoding/v1/address?key=${
    process.env.REACT_APP_GEOLOCATION_KEY
  }&location=${rua}+${number},${cidade},${state},${zip}`;

  React.useEffect(() => {
    async function fetchData() {
      const resp = await fetch(api);
      const data = await resp.json();
      const { lat, lng } = data.results[0].locations[0].displayLatLng;
      if (latitude === undefined) {
        setGeoLat(lat);
        setGeoLon(lng);
      }
    }
    fetchData();
  }, [api, latitude]);

  function Map() {
    setGeoLat(Number(geoLat));
    setGeoLon(Number(geoLon));

    return (
      <GoogleMap defaultZoom={16} defaultCenter={{ lat: geoLat, lng: geoLon }}>
        <Marker position={{ lat: geoLat, lng: geoLon }} />
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.mapBox}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_KEY
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div className={styles.mapa} />}
          containerElement={<div className={styles.mapa} />}
          mapElement={<div className={styles.mapa} />}
        />
      </div>
      <div className={styles.address}>
        <h3>
          {street} n° {number}
        </h3>
        <h3>{bairro}</h3>
        <h3>
          {city} - {state}
        </h3>
        <h3>CEP {cep}</h3>
      </div>
    </div>
  );
};

export default Address;
