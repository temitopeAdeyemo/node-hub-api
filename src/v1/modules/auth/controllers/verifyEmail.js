import verifyEmailService from "../services/VerifyEmailService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { tempId, otp } = req.body;

  const data = await verifyEmailService.execute({
    tempId,
    otp,
  });

  return res.status(200).json({
    success: true,
    message: "Email verified successfully",
    data,
  });
});
