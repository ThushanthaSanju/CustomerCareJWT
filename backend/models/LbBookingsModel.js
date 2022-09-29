import mongoose from "mongoose";

//for create table into db
const lbBookingSchema = new mongoose.Schema({

    booingID: { type: String },
    email: { type: String },
    facilities: { type: String},
    contact: { type: String },
    lbName: { type: String},
    date: { type: String},
    hours: { type: String},
    amount: { type: String},
    fType: { type: String},
    count: { type: String},
    spRequirement: { type: String},
    


}, {
    //for date
    timestamps: true
});

const LbBooking = mongoose.model("LbBooking", lbBookingSchema);
export default LbBooking;