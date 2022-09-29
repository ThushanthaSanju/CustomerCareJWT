import mongoose from "mongoose";

//for create table into db
const liveboardSchema = new mongoose.Schema({

    fname: { type: String, required: true },
    facilities: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    capacity: { type: String, required: true },
    image: { type: String },
    cloudinary_id: { type: String },

}, {
    //for date
    timestamps: true
});

const LiveBoard = mongoose.model("LiveBoard", liveboardSchema);
export default LiveBoard;