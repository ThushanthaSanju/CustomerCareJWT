import mongoose from "mongoose";

//for create table into db
const lbBookingSchema = new mongoose.Schema({

    lbBookingID: { type: String, required: true },
    name: { type: String, required: true },
    facilities: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    capacity: { type: Number, required: true },
    image: { type: String, required: true }

}, {
    //for date
    timestamps: true
});

const LbBooking = mongoose.model("LbBooking", lbBookingSchema);
export default LbBooking;