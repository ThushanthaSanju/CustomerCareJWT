import Package from "../models/package.js";

export const allPackage = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const onePackage = (req, res) => {
  res.json(res.package);
};

export const createPackage = async (req, res) => {
  const packagee = new Package({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  try {
    const newPackage = await packagee.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updatePackage = async (req, res) => {
  if (req.body.name != null) {
    res.package.name = req.body.name;
  }
  if (req.body.description != null) {
    res.package.description = req.body.description;
  }
  if (req.body.price != null) {
    res.package.price = req.body.price;
  }
  try {
    const updatedPackage = await res.package.save();
    res.status(201).json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    await res.package.remove();
    res.json({ message: "Deleted Package" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
