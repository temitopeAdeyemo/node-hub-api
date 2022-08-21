import asyncWrapper from "../../../shared/utils/asyncWrapper";
import resetPasswordService from "../services/ResetPasswordService";

export default asyncWrapper(async (req, res) => {
  const { tempId, password } = req.body;

  const user = await resetPasswordService.execute({ tempId, password });

  return res.status(200).json({
    success: true,
    message: "Password reset successfully",
  });
});
