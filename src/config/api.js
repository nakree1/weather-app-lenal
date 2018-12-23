import axios from 'axios'

const api = {
  getLocationByQuery: (query) => axios.get(`/api/location/search/?query=${query}`),
  getLocationByCoords: ({lat, lng}) => axios.get(`/api/location/search/?lattlong=${lat},${lng}`),
  getForecastByCityId: (id) => axios.get(`/api/location/${id}/`),
};

export default api