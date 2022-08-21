import jest from "jest";
import supertest from "supertest";
import app from "../../app";
const request = supertest(app);
const User = require("../modules/users/models/User");
const mongoose = require("mongoose");
const { beforeEach, afterEach } = require("@jest/globals");
const databaseName = "User_test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});


afterEach(async () => {
  await User.remove();
});


