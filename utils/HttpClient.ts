import axios from 'axios';

const createHttpClient = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `key ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  })
}

export default createHttpClient;