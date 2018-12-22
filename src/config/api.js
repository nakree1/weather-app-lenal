import axios from 'axios'

const api = {
  getLocationByQuery: (query) => axios.get(`/api/location/search/?query=${query}`),
  getForecastByCityId: (id) => axios.get(`/api/location/${id}/`),
};

export default api