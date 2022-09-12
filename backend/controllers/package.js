import Package from "../models/package.js";

export const allPackage = async (req, res, next) => {
  Package.find()
    .then((packages) => {
      if (packages.length < 1) {
        return res.status(402).json({
          message: "No packages data availble",
        });
      } else {
        return res.status(200).json({
          success: true,
          code: 200,
          data: packages,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const onePackage = (req, res) => {
  let query = { _id: req.params.id };

  Package.findOne(query)
    .then((packages) => {
      if (packages < 1) {
        return res.status(402).json({
          message: "No packages data found",
        });
      } else {
        res.status(200).json({
          success: true,
          code: 200,
          data: packages,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const createPackage = async (req, res) => {
  try {
    const lrqDetails = req.body;
    const newPackage = new Package(lrqDetails);

    await newPackage.save(function (err) {
      if (err) {
        console.log(err);
        res.status(600).json({
          message: "Error occured when creating newPackage.",
          error: err,
        });
        return;
      }
      res.status(201).json({
        message: "newPackage successfully created!",
        success: true,
      });
      return;
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Unable to create newPackage.",
      success: false,
    });
  }
};

export const updatePackage = async (req, res) => {
  let query = { _id: req.params.id };
  Package.findOne(query)
    .exec()
    .then((found_packages) => {
      if (found_packages < 1) {
        return res.status(400).json({
          message: "No data found",
        });
      } else {
        if (req.body.name != null) {
          res.package.name = req.body.name;
        }
        if (req.body.description != null) {
          res.package.description = req.body.description;
        }
        if (req.body.price != null) {
          res.package.price = req.body.price;
        }

        // found_packages.updated_at = new Date();

        found_packages.save((err, updated_object) => {
          if (err) {
            return next(err);
          }

          res.status(200).json({
            success: true,
            code: 200,
            data: updated_object,
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const deletePackage = async (req, res) => {
  let query = { _id: req.params.id };

  Package.findOne(query)
    .exec()
    .then((found_packages) => {
      if (found_packages < 1) {
        return res.status(402).json({
          message: "No Package data found",
        });
      } else {
        found_packages.remove((err, result) => {
          if (err) {
            return next(err);
          }

          res.status(200).json({
            success: true,
            code: 200,
            data: result,
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
