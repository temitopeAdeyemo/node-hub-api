import registrationService from "../services/RegistrationService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

module.exports = asyncWrapper(async (req, res) => {
  const { email } = req.body;

  const user = await registrationService.execute({ email });

  return res.status(200).json({
    success: true,
    message: "OTP sent to your email",
    data: user,
  });
});
