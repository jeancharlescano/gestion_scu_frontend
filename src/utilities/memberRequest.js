import axios from "axios";

export const createMember = async (member) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_APP_HTTP}/api/utilisateur`, member)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAllMembers = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_APP_HTTP}/api/utilisateur`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
