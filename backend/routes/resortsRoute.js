import express from "express";
import {createResorts, getResorts, getResortsByid, updateResorts, deleteResort} from "../controllers/resorts_ctrl.js";

const router = express.Router();

router.post('/create', createResorts);
router.get('/getall', getResorts);
router.get('/getone/:id', getResortsByid);
router.patch('/update/:id', updateResorts);
router.delete('/delete/:id', deleteResort);

export default router;