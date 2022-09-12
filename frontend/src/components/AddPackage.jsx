import React, { useState, useEffect } from 'react';
//import * as FaIcons from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PackageController from "../controllers/package_contoller";
import { useNavigate } from "react-router-dom";

const CreateResort = () => {
    //form data
    const [data, setData] = useState({ name: '', description: '', price: 0 });
    const [btnDisable, setBtnDisable] = useState(false);
    const navigate = useNavigate();

    /*const onChangePicture = (e) => {
        console.log('picture:',images);
        setImages(e.target.files[0]);
    };*/

    const onSubmitClick = async (e) => {
        e.preventDefault();
        setBtnDisable(true);

        try {
            if (validateForm()) {
                PackageController.PackageCreate(data).then((res) => {
                    console.log(res);
                    if (res.success) {
                        toast.success("Package created Success")
                    } else {
                        toast.error("Creation Failed")
                    }
                    clearForm()
                    setBtnDisable(false);
                }).catch((err) => {
                    console.log(err);
                    setBtnDisable(false);
                })
            }
        } catch (error) {
            setBtnDisable(false);

        }
    }

    //form clearance
    const clearForm = () => {
        setBtnDisable(false);
        setData({ name: '', description: '', price: 0 })
    }

    //validation
    const validateForm = () => {
        //toast.success("Data added")
        if (!data.name) {
            toast.error("Please enter the name");
            return false;
        }
        else if (!data.description) {
            toast.error("Please enter the description");
            return false;
        }
        else if (!data.price) {
            toast.error("Please enter the price");
            return false;
        }



        return true;
    }

    return (
        <div className=''>
            <div className='mx-3 my-3 '>
                <div className=''>
                    <h3><center>Package Create Window</center></h3>
                </div>
            </div>

            <div className=''>
                <div className='row mx-3 my-3'>
                    <div className='col-5 mx-auto'>
                        <div className='card mx-3 my-3 shadow-sm rounded'>
                            <div className='px-4'>
                                <form>
                                    <div className='my-3'>
                                        <label htmlFor='name' className='form-label'>Name</label>
                                        <input type="text" className='form-control' id="name"
                                            value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='description' className='form-label'>Description</label>
                                        <input type="text" className='form-control' id="description"
                                            value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='price' className='form-label'>Price</label>
                                        <input type="number" className='form-control' id="price"
                                            value={data.price} onChange={(e) => { setData({ ...data, price: e.target.value }) }} />
                                    </div>


                                    <center>
                                        <button type='submit' disabled={btnDisable} className='btn btn-primary my-3' onClick={(e) => { onSubmitClick(e) }}>CREATE</button>
                                        <button className='btn btn-secondary my-3 mx-3' onClick={(e) => { navigate("/packages"); }}>Show List</button>
                                    </center>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default CreateResort;