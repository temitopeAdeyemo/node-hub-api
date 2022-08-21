import AppError from "../../../shared/utils/appError";
import userRepository from "../../users/repositories/UserRepository";
import cache from "../../../shared/services/cache";
import { generateOTP } from "../../../shared/utils";
import { v4 as uuid } from "uuid";

class ForgotPasswordService {
  async execute(data) {
    const user = await userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError("This email does not exists.");
    }

    const otp = generateOTP();
    const cachedData = {
      email: data.email,
      for: "Forgot_Password",
      otp,
    };

    const tempId = uuid();
    cache.set(`${tempId}`, cachedData, 60 * 60 * 5);
    // send otp
    return {tempId, otp};
  }
}

export default new ForgotPasswordService();
