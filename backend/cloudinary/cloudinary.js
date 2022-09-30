import * as cloudinary from "cloudinary";
import dotenv from "dotenv";

cloudinary.config({
  cloud_name: "dagbjpmnx",
  api_key: "453218634988178",
  api_secret: "yp2KapAMSzZ3LNWJiVkYFLxJSHg",
});

cloudinary.v2.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    console.log(result);
  }
);

export default cloudinary;
