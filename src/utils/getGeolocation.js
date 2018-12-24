export default function getGeolocation(successCallback) {
  if ('geolocation' in navigator) {
    const onGeoSuccess = ({ coords }) => {
      console.log(coords);

      successCallback({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    };

    const onGeoError = () => {
      console.error('Geo permission denied');
      errorCallback();
    };

    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
  } else {
    errorCallback();
  }
}
