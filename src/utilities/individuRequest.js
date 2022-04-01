import axios from "axios";

const API_APP_HTTP = "http://localhost:3000";

export const createIndividu = async (individu) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_APP_HTTP}/api/individu`, individu)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAllIndividu = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_APP_HTTP}/api/individu`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
