import axios from "axios";
import Storage from "./storage";
const baseUrl = process.env.REACT_APP_REST_API_LOCATION;

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
      "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wbGF5bGlzdC5wYWdldmFtcC5wdlwvbG9naW4iLCJpYXQiOjE1NTM0NTM4NTksImV4cCI6MTU1NzA1Mzg1OSwibmJmIjoxNTUzNDUzODU5LCJqdGkiOiJNd1Z6eDh1emMxTjZwSG1vIiwic3ViIjoiNTNiMTQ2NGEtNGU1OS0xMWU5LTlhY2YtMDI0MmFjMTMwMDE3IiwicHJ2IjoiYjdmZjdmZjQyNzYyMzhhYzI4ODQ5NDNiZWE3MDM2MmUxOTE3M2RjYSJ9.cTjbybDEJGypoqQZ8Re5qc6zUClXWxqF-zujvoCbQ5M';
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
