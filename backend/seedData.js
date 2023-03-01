
import express from "express";
import bcrypt from "bcryptjs";

import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.message);
  });


  

  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  });


 
  const Product = mongoose.model.Product //||  mongoose.model("Product", productSchema);

  //  mongoose.models.Customer || mongoose.model("Customer", customerSchema);





const data = {
  products: [
    
    

    {
      name: "2017 Apple MacBook Air",
      slug: "mbair",
      price: 100,
      countInStock: 1,
      image: "/images/mbair.jpg",
      description:
        "This product is in good condition. The screen has no scratches; body shows light scratches barely visible from 12 inches away.",
    },

    {
      name: "Dell Inspiron 15 3000 Series 3511 Laptop",
      slug: "dell2",
      price: 65,
      countInStock: 2,
      image: "/images/dell2.jpg",
      description:
        "15.6 FHD Touchscreen, Intel Core i5-1135G7, 32GB DDR4 RAM, 1TB PCIe SSD, SD Card Reader, Webcam, HDMI, Wi-Fi, Windows 11 Home, Black",
    },

    {
      name: "Dell Inspiron 3515",
      slug: "dell1",
      price: 180,
      countInStock: 3,
      image: "/images/dell1.jpg",
      description:
        " Laptop, 15.6''HD Display, AMD Ryzen 5 3450U, Windows 11 Pro, 16GB RAM, 1TB HDD, HDMI, Wi-Fi, Bluetooth, Long Battery Life, SD Card Reader, Carbon Black",
    },

    {
      name: "Wired USB Keyboard with US",
      slug: "keyboard1",
      price: 8,
      countInStock: 3,
      image: "/images/kb1.jpg",
      description:
        "Keyboard with low-profile keys for a comfortable, quiet typing experience",
    },

    {
      name: "Logitech MK545 Advanced Wireless Keyboard and Mouse Combo",
      slug: "keyboard2",
      price: 9,
      countInStock: 4,
      image: "/images/kb2.jpg",
      description: "Quiet typing experience",
    },

    {
      name: "Dacoity Keyboard",
      slug: "kb3",
      price: 10,
      countInStock: 5,
      image: "/images/kb3.jpg",
      description:
        "Ergonomic Design with Wrist Rest.This silent keyboard features a scientific stepped keycap design to maximize hand comfort for long hours of gaming or work.",
    },

    {
      name: "Standard Keyboard",
      slug: "kb4",
      price: 15,
      countInStock: 6,
      image: "/images/kb4.jpg",
      description: "This keyboard features a scientific stepped keycap design",
    },

    {
      name: "Logitech K270 Wireless",
      slug: "kb5",
      price: 20,
      countInStock: 7,
      image: "/images/kb5.jpg",
      description:
        "Keyboard for Windows, 2.4 GHz Wireless, Full-Size, Number Pad, 8 Multimedia Keys, 2-Year Battery Life, Compatible with PC, Laptop",
    },

    {
      name: "Acer 23.8” Full HD 1920 x 1080 IPS Zero Frame Home Office Computer Monitor ",
      slug: "m1",
      price: 25,
      countInStock: 8,
      image: "/images/m1.jpg",
      description:
        "Computer Monitor 178° Wide View Angle, 16.7M, NTSC 72% Color Gamut, Low Blue Light Tilt Compatible,VGA HDMI DVI R240HY bidx",
    },

    {
      name: "Samsung CF390 Series 27 inch",
      slug: "m3",
      price: 56,
      countInStock: 9,
      image: "/images/m3.jpg",
      description:
        " Designed to closely match the way the human eye views objects, the ultra curved screen helps promote comfort ",
    },

    {
      name: "Sceptre IPS 24 InchComputer Monitor",
      slug: "m4",
      price: 30,
      countInStock: 10,
      image: "/images/m4.jpg",
      description:
        "Wide viewing angles keep all the action sharply sight from almost any viewing position when gaming on large monitors or dual display setup",
    },

    {
      name: "ViewSonic 32 Inch",
      slug: "m5",
      price: 38,
      countInStock: 11,
      image: "/images/m5.jpg",
      description:
        "FORM & FUNCTION: With ultra-slim bezels design, Full HD (1920x1080p) resolution, and premium IPS panel, this monitor looks as good as it performs",
    },

    {
      name: "OneSpace Stanton Computer Desk",
      slug: "d1",
      price: 25,
      countInStock: 12,
      image: "/images/d1.jpg",
      description:
        "Sleek and elegant designPullout Keyboard shelfBottom S shelf",
    },

    {
      name: "FLEXISPOT Standing Desk 48 x 30",
      slug: "d2",
      price: 40,
      countInStock: 13,
      image: "/images/d2.jpg",
      description:
        "Adjustable Desk Electric Sit Stand Desk Home Office Desks Whole Piece Desk Board",
    },

    {
      name: "Computer Task Office Desk Chair",
      slug: "ch1",
      price: 30,
      countInStock: 14,
      image: "/images/ch1.jpg",
      description:
        "Comfortable task and computer chair with blue contoured mesh back for support and breathability",
    },
  ],

  
};

export default data;


async function seedData() {
  try {
    

    // insert products
    await Product.insertMany(data.products);

    console.log("Data seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();




