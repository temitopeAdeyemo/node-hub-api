import express from "express";
import {
  registerUser,
  verifyEmail,
  setPassword,
  loginUser,
} from "./controllers";
import {
  registerValidator,
  verifyEmailValidator,
  setPasswordValidator,
  loginValidator,
} from "./validators";

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/verify-email", verifyEmailValidator, verifyEmail);
router.post("/set-password", setPasswordValidator, setPassword);
router.post("/login", loginValidator, loginUser);

export default router;
