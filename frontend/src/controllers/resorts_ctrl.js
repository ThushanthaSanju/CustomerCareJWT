// import axios
import axios from "axios";
//import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
//import { useParams } from "react-router-dom";

// import config
import Config from "./Config";

const api = {
    resortcreate: "/resorts/create",
    resortgetall: "/resorts/getall",
    resortgetone: "/resorts/getone",
    resortdelete: "/resorts/delete",
    resortupdate: "/resorts/update",
};



class ResortCtrl {
    api;

    async ResortCreate(data) {
        console.log(data);

        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            axios.post(`${Config.host}${Config.port}${api.resortcreate}`, data)
                .then((Response) => {
                    resolve(Response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    async ResortGet(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.get(`${Config.host}${Config.port}${api.resortgetall}`)
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

    async ResortGetOne(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.get(`${Config.host}${Config.port}${api.resortgetone}/${params}`,)
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

   async ResortUpdate(id,data) {
         const config = {
             headers: { Authorization: `${localStorage.getItem('usertoken')}` }
         };
        return new Promise((resolve, reject) => {
            return axios.patch(`${Config.host}${Config.port}${api.resortupdate}/${id}`,data)
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

    async ResortDelete(params) {
        // const config = {
        //     headers: { Authorization: `${localStorage.getItem('usertoken')}` }
        // };
        return new Promise((resolve, reject) => {
            return axios.delete(`${Config.host}${Config.port}${api.resortdelete}/${params}`)
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
export default new ResortCtrl();
