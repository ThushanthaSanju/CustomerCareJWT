import React, { useState, useEffect } from 'react';
//import * as FaIcons from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SnokelingController from "../controllers/snoklingController.js";
import { useNavigate } from "react-router-dom";

const CreateSnokling = () => {
    //form data
    const [data, setData] = useState({ productID: '', productName: '', price: 0, warantyPeriod: 0, description: '', images: [] });
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
                SnokelingController.SnoklingCreate(data).then((res) => {
                    console.log(res);
                    if (res.success) {
                        toast.success("Registration Success")
                    } else {
                        toast.error("Registration Failed")
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
        setData({ productID: '', productName: '', price: 0, warantyPeriod: 0, description: '', images: [] })
        
    }

    //validation
    const validateForm = () => {
        //toast.success("Data added")
        if (!data.productID) {
            toast.error("Please enter the product ID");
            return false;
        }
        else if (!data.productName) {
            toast.error("Please enter the name of product");
            return false;
        }
        else if (!data.price) {
            toast.error("Please enter the price of product");
            return false;
        }
        else if (!data.warantyPeriod) {
            toast.error("Please enter waranty period")
            return false;
        }
        else if (!data.description) {
            toast.error("Please enter the description");
            return false;
        }
        else if (!data.images) {
            toast.error("Please enter the images");
            return false;
        }

        return true;
    }

    return (
        <div className=''>
            <div className='mx-3 my-3 '>
                <div className=''>
                    <h3><center>Product Create Window</center></h3>
                </div>
            </div>

            <div className=''>
                <div className='row mx-3 my-3'>
                    <div className='col-5 mx-auto'>
                        <div className='card mx-3 my-3 shadow-sm rounded'>
                            <div className='px-4'>
                                <form>
                                    <div className='my-3'>
                                        <label htmlFor='productID' className='form-label'>Product ID</label>
                                        <input type="text" className='form-control' id="productID"
                                            value={data.productID} onChange={(e) => { setData({ ...data, productID: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='productName' className='form-label'>Product Name</label>
                                        <input type="text" className='form-control' id="productName"
                                            value={data.productName} onChange={(e) => { setData({ ...data, productName: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='price' className='form-label'>Product Price</label>
                                        <input type="number" className='form-control' id="price"
                                            value={data.price} onChange={(e) => { setData({ ...data, price: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='warantyPeriod' className='form-label'>Waranty Period</label>
                                        <input type="number" className='form-control' id="warantyPeriod"
                                            value={data.warantyPeriod} onChange={(e) => { setData({ ...data, warantyPeriod: e.target.value }) }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='description' className='form-label'>Description</label>
                                        <input type="text" className='form-control' id="description"
                                            value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
                                    </div>
                                    <center>
                                        <button type='submit' disabled={btnDisable} className='btn btn-primary my-3' onClick={(e) => { onSubmitClick(e) }}>CREATE</button>
                                        <button className='btn btn-secondary my-3 mx-3' onClick={(e) => { navigate("/snoklins"); }}>Show List</button>
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
export default CreateSnokling;