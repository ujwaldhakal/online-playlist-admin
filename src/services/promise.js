import axios from 'axios';

const baseUrl = 'http://playlist.pagevamp.pv';
const getPromise = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
const patchPromise = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseUrl + url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
const postPromise = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
const deletePromise = url => {
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
export { getPromise, postPromise, deletePromise, patchPromise };
