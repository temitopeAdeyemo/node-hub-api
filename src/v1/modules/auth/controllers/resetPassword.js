import asyncWrapper from "../../../shared/utils/asyncWrapper";
import resetPasswordService from "../services/ResetPasswordService";

export default asyncWrapper(async (req, res) => {
  const { tempId, otp, password } = req.body;
  await resetPasswordService.execute({ tempId, otp, password });

  return res.status(201).json({
    success: true,
    message: "Password reset successfully",
  });
});
