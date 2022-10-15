import mongoose from "mongoose";

//for create table into db
const pCustomerSchema = new mongoose.Schema({

    productID: { type: String },
    date: { type: String},
    email: { 
        type: String,
        required: true 
    },
    description: { type: String},
    contact:  { 
        type: String,
        required: true 
    },
    pName: { type: String},
    quntity: { type: Number},
    productsPrice: { type: Number},
    payType:  { 
        type: String,
        required: true 
    },
    deliveryAdd: { 
        type: String,
        required: true 
    },
    
}, {
    //for date
    timestamps: true
});

const pCustomer = mongoose.model("PCustomer", pCustomerSchema);
export default pCustomer;