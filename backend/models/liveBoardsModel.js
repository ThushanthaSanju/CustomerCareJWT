import mongoose from "mongoose";

//for create table into db
const liveboardSchema = new mongoose.Schema({

    liveboardID: { type: String, required: true },
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

const LiveBoard = mongoose.model("LiveBoard", liveboardSchema);
export default LiveBoard;