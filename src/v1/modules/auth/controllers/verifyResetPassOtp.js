import verifyResetPassOtpService from "../services/verifyResetPassOtpService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { tempId, otp } = req.body;

  const data = await verifyResetPassOtpService.execute({
    tempId,
    otp,
  });

  return res.status(200).json({
    success: true,
    message: "You can now proceed to reset your password.",
    data,
  });
});
