import asyncWrapper from "../../../shared/utils/asyncWrapper";
import setPasswordService from "../services/SetPasswordService";

export default asyncWrapper(async (req, res) => {
  const { tempId, password } = req.body;

  const user = await setPasswordService.execute({ tempId, password });

  return res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: user,
  });
});
