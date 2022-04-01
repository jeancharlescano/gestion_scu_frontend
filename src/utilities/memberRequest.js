import axios from "axios";

const API_APP_HTTP = "http://localhost:3000";

export const createMember = async (member) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_APP_HTTP}/api/utilisateur`, member)
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
      .get(`${API_APP_HTTP}/api/utilisateur`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
