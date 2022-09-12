// import axios
import axios from "axios";
//import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
//import { useParams } from "react-router-dom";

// import config
import Config from "./Config";

const api = {
  packageCreate: "/packages",
  packageGetAll: "/packages",
  packageGetOne: "/packages",
  packageDelete: "/packages",
  packageUpdate: "/packages",
};

class PackageControl {
  api;

  async PackageCreate(data) {
    console.log(data);

    // const config = {
    //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
    // };
    return new Promise((resolve, reject) => {
      axios
        .post(`${Config.host}${Config.port}${api.packageCreate}`, data)
        .then((Response) => {
          resolve(Response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async PackageGet(params) {
    // const config = {
    //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
    // };
    return new Promise((resolve, reject) => {
      return axios
        .get(`${Config.host}${Config.port}${api.packageGetAll}`)
        .then((result) => {
          if (result.status === 200) {
            resolve(result.data);
          } else {
            resolve([]);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async PackageGetOne(params) {
    // const config = {
    //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
    // };
    return new Promise((resolve, reject) => {
      return axios
        .get(`${Config.host}${Config.port}${api.packageGetOne}/${params}`)
        .then((result) => {
          if (result.status === 200) {
            resolve(result.data);
          } else {
            resolve([]);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async PackageUpdate(id, data) {
    // const config = {
    //   headers: { Authorization: `${localStorage.getItem("usertoken")}` },
    // };
    return new Promise((resolve, reject) => {
      return axios
        .patch(`${Config.host}${Config.port}${api.packageUpdate}/${id}`, data)
        .then((result) => {
          if (result.status === 200) {
            resolve(result.data);
          } else {
            resolve([]);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async PackageDelete(params) {
    // const config = {
    //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
    // };
    return new Promise((resolve, reject) => {
      return axios
        .delete(`${Config.host}${Config.port}${api.packageDelete}/${params}`)
        .then((result) => {
          if (result.status === 200) {
            resolve(result.data);
          } else {
            resolve([]);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default new PackageControl();
