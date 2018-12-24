import axios from 'axios'

const path = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com';
// for bypass cors

const api = {
  getLocationByQuery: (query) => axios.get(`${path}/api/location/search/?query=${query}`),
  getLocationByCoords: ({lat, lng}) => axios.get(`${path}/api/location/search/?lattlong=${lat},${lng}`),
  getForecastByCityId: (id) => axios.get(`${path}/api/location/${id}/`),
};

export default api