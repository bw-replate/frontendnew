import axios from 'axios';

export const axiosWithAuth = () => {
  // get the token from localstorage
  const token = window.localStorage.getItem('token');
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://bw-replate-1.herokuapp.com/api'
  });
};
