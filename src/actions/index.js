import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const FETCH_DATA_SWAPI = 'FETCH_DATA_SWAPI'
export const getDataStarWars = () => {
  return { 
    type: FETCH_DATA_SWAPI,
    payload: getApiDataSwapi()
  }
}


const getApiDataSwapi = () => {
  return axios.get('https://swapi.co/api/people/1/')
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}