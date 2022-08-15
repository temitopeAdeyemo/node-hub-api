import authenticationService from "../services/AuthenticationService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

export default asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  const tokens = await authenticationService.execute({ email, password });

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: tokens,
  });
});
