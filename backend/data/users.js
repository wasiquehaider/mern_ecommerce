import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Wasique Haider",
    email: "wasique@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Raheel Ahmed",
    email: "raheel@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
