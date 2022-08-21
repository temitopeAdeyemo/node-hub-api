import forgotPasswordService from "../services/ForgotPasswordService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const data = await forgotPasswordService.execute({ email: req.body.email });
  return res.status(200).json({
    message: "Please check your email for otp.",
    data,
  });
});
