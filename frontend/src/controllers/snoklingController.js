// import axios
import axios from "axios";
//import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
//import { useParams } from "react-router-dom";

// import config
import Config from "./Config";

const api = {
    snoklingcreate: "/snoklins/create",
    snoklinggetall: "/snoklins/getall",
    snoklinggetone: "/snoklins/getone",
    snoklingdelete: "/snoklins/delete",
    snoklingupdate: "/snoklins/update",
};



class SnokelingController {
    api;

    async Snoklingcreate(data) {
        console.log(data);

        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            axios.post(`${Config.host}${Config.port}${api.snoklingcreate}`, data)
                .then((Response) => {
                    resolve(Response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    async SnoklingGet(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.get(`${Config.host}${Config.port}${api.snoklinggetall}`)
                .then(result => {
                    if (result.status === 200) {
                        resolve(result.data)
                    } else {
                        resolve([])
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    async SnoklingGetOne(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.get(`${Config.host}${Config.port}${api.snoklinggetone}/${params}`,)
                .then(result => {
                    if (result.status === 200) {
                        resolve(result.data)
                    } else {
                        resolve([])
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

   async SnoklingUpdate(id,data) {
         const config = {
             headers: { Authorization: `${localStorage.getItem('usertoken')}` }
         };
        return new Promise((resolve, reject) => {
            return axios.patch(`${Config.host}${Config.port}${api.snoklingupdate}/${id}`,data)
                .then(result => {
                    if (result.status === 200) {
                        resolve(result.data)
                    } else {
                        resolve([])
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    async SnoklingDelete(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.delete(`${Config.host}${Config.port}${api.snoklingdelete}/${params}`)
                .then(result => {
                    if (result.status === 200) {
                        resolve(result.data)
                    } else {
                        resolve([])
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}
export default new SnokelingController();
