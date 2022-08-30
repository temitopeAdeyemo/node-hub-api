import asyncWrapper from "../../../shared/utils/asyncWrapper";
import forgotPassword from "../services/ForgotPasswordService";

export default asyncWrapper(async (req, res) => {
  const { email } = req.body;

  const otp = await forgotPassword.execute({ email });

  return res.status(201).json({
    success: true,
    message: "Password reset OTP has been sent to your email",
    data: otp,
  });
});
