import axios from "axios";
import Storage from "./storage";
const baseUrl = 'https://playlist.pagevamp.pv/'

class RequestOut {
  constructor() {
    this.axios = axios;
    this.storage = new Storage();
    // if (this.getAccessToken()) {
      this.interceptHeader();
    // }
    // this.responseData();
  }

  getAccessToken() {
    return this.storage.get("access_token");
  }

  interceptHeader() {
    this.axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.storage.get('access_token');
  }


  getPromise(url) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(baseUrl + url)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  patchPromise(url, data) {
    return new Promise((resolve, reject) => {
      this.axios
        .patch(baseUrl + url, data)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  postPromise(url, data) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(baseUrl + url, data)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  deletePromise(url) {
    return new Promise((resolve, reject) => {
      this.axios
        .delete(baseUrl + url)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
}

export default RequestOut;
