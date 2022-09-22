import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react'

const Home = () => {

    const PackageGet = () => {

        return new Promise((resolve, reject) => {
            return axios
                .get("http://localhost:5000/api/packages/all")
                .then((result) => {
                    if (result.status === 200) {
                        console.log(result.data);
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
    return (
        <>  <Button onClick={PackageGet}> hsadfhsdfjhsdfjh</Button></>


    )
}

export default Home