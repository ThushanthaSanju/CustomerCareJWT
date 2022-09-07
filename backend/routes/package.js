import express from "express";
import Package from "../models/package.js";
import {
  allPackage,
  onePackage,
  createPackage,
  updatePackage,
  deletePackage,
} from "../controllers/package.js";

const router = express.Router();
// Getting all
router.get("/", allPackage);

// Getting One
router.get("/:id", getPackage, onePackage);

// Creating one
router.post("/", createPackage);

// Updating One
router.patch("/:id", getPackage, updatePackage);

// Deleting One
router.delete("/:id", getPackage, deletePackage);

async function getPackage(req, res, next) {
  let packagee;
  try {
    packagee = await Package.findById(req.params.id);
    if (packagee == null) {
      return res.status(404).json({ message: "Cannot find package" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.package = packagee;
  next();
}

export default router;
