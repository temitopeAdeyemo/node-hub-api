import asyncWrapper from "../../../shared/utils/asyncWrapper";

import changePasswordService from "../services/ChangePasswordService";

export default asyncWrapper(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  await changePasswordService.execute({
    currentPassword,
    newPassword,
    userId: req.user,
  });

  return res.status(201).json({
    success: true,
    message: "Password changed successfully",
  });
});
