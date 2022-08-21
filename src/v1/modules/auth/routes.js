import express from "express";
import {
  registerUser,
  verifyEmail,
  setPassword,
  loginUser,
  forgotPassword,
  resetPassword,
  verifyResetPassOtp,
} from "./controllers";
import {
  registerValidator,
  verifyEmailValidator,
  setPasswordValidator,
  loginValidator,
  forgotPassEmailValidator,
  verifyResetPassOtpValidator,
  resetPasswordValidator,

} from "./validators";

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/verify-email", verifyEmailValidator, verifyEmail);
router.post("/set-password", setPasswordValidator, setPassword);
router.post("/login", loginValidator, loginUser);
router.post("/forgot-password/get-otp", forgotPassEmailValidator, forgotPassword);
router.post(
  "/forgot-password/verify-otp",
  verifyResetPassOtpValidator,
  verifyResetPassOtp
);
router.patch("/reset-password", setPasswordValidator, resetPassword);

export default router;
