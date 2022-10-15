import PCustomer from "../models/pCustomerModel.js";

//for add or fetch
export const getPCustomerController = async (req, res) => {
    try {

        const pCustomers = await PCustomer.find();
        res.status(200).send(pCustomers);

    } catch(error) {
        console.log(error);
    }
}

//for add
export const addPCustomerController = async (req, res) => {

    try {
        console.log(req.body);
        const newPCustomers = new PCustomer(req.body);
        await newPCustomers.save();
        res.status(200).send("Customer order Created Successfully!");

    } catch(error) {
        console.log(error);
    }

}



// //for update
// export const updateLbBookingController = async (req, res) => {
//     try {

//         await LbBooking.findOneAndUpdate({_id: req.body.lbBookingId}, req.body, {new: true})
//         res.status(201).json("LbBooking Updated!");
//     } catch(error) {
//         res.status(400).send(error);
//         console.log(error);
//     }
// }

// //for delete
// export const deleteLbBookingController = async (req, res) => {
//     try {

//         await LbBooking.findOneAndDelete({_id: req.body.lbBookingId})
//         res.status(200).json("LbBooking Deleted!");
//     } catch(error) {
//         res.status(400).send(error);
//         console.log(error);
//     }
// }