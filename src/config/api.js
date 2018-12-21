import axios from 'axios'



// const weatherApi = ''

const api = {
  getLocationByQuery: (query) => axios.get(`/api/location/search/?query=${query}`)
};

export default api