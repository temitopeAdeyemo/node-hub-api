import jest from "jest";
import supertest from "supertest";
import app from "../../app";
const App = new app();
const request = supertest(App.getApp());
import User from "../modules/users/models/User";
import Profile from "../modules/users/models/Profile";
import mongoose from "mongoose";
import { beforeEach, afterEach } from "@jest/globals";
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

afterEach(async () => {
  await User.deleteMany();
});

afterEach(async () => {
  await Profile.deleteMany();
});

it("has a module", () => {
  expect("User").toBeDefined();
});

const data = {
  email: "test1@gmail.com",
    password: "testpassword",
};

const cachedData = {
  email: data.email,
  isVerified: true,
  password: "testpassword"
};

it("should cache a user email", async () => {
  const user = await new User(newUser);
  const res = await request.post("/v1/auth/login").send(data);
  console.log("res.boddddddddddddy", res.body);
});

// it("should save a user in the database", async () => {
  // const user = await new User(newUser);
//   await user.save();
//   expect(user.email).toEqual(newUser.email);
//   expect(newUser.password).toBeDefined();
// });

// it("should find a user in the database", async () => {
//   const user = await User.findOne({ email: newUser.email });
//   console.log(user);
//   expect(user).toEqual(null);
// });

afterAll(async () => {
  await mongoose.connection.close();
});
