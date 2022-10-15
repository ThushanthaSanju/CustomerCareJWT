import express from "express";
import { getPCustomerController, addPCustomerController} from "../controllers/pCustomer.js";

const pCustomerRouter = express.Router();

pCustomerRouter.get("/getpCustomers", getPCustomerController);

pCustomerRouter.post("/addpCustomers", addPCustomerController);

// pCustomerRouter.put("/updatepCustomers", updatePCustomerController);

// pCustomerRouter.post("/deletepCustomers", deletePCustomerController);

export default pCustomerRouter;