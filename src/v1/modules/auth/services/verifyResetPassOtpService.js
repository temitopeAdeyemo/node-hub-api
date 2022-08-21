import { v4 as uuid } from "uuid";
import AppError from "../../../shared/utils/appError";
import cache from "../../../shared/services/cache";

class VerifyResetPassOtpService {
  async execute({ tempId, otp }) {
    const cachedData = await cache.get(tempId);

    if (
      !cachedData ||
      cachedData.for !== "Forgot_Password" ||
      cachedData.otp !== otp
    ) {
      throw new AppError("Invalid or expired otp");
    }

    const newCachedData = {
      email: cachedData.email,
      for: "Reset_Password",
    };
    
    const newTempId = uuid();
    cache.set(`${newTempId}`, newCachedData, 60 * 60 * 5);
    cache.delete(tempId);

    return { tempId: newTempId };
  }
}

export default new VerifyResetPassOtpService();
