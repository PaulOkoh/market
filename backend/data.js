import bcrypt from "bcryptjs";

const data = {

  users: [
    {
      name: "Peter",
      email: "admin@peterpan.com",
      password: bcrypt.hashSync("456789"),
      isAdmin: true,
    },

    {
      name: "Mike",
      email: "user@user.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "macbook",
      slug: "macbook",
      price: 40,
      countInStock: 10,

      image: "/images/macpro.jpg",
      description: "great laptop",
    },
    {
      // _id: "2",
      name: "lenovo",
      slug: "lenovo1",
      price: 30,
      countInStock: 20,
      image: "/images/lenovo.jpg",
      description: "greatest lappy",
    },
    {
      // _id: "3",
      name: "lenovo2",
      slug: "lenove2",
      price: 30,
      countInStock: 33,
      image: "/images/lenovo.jpg",
      description: "great",
    },
    {
      // _id: "4",
      name: "lenovo3",
      slug: "lenovo3",
      price: 30,
      countInStock: 0,
      image: "/images/lenovo.jpg",
      description: "marvelous",
    },
    
  ],
};

export default data;
