import axios from "axios";

export const createIndividu = async (individu) => {
  return new Promise((resolve, reject) => {
    axios
    .post(`${import.meta.env.VITE_APP_HTTP}/api/individu`, individu)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
      console.log(import.meta);
      });
  });
};

export const getAllIndividu = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_APP_HTTP}/api/individu`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
