import { v4 as uuid } from "uuid";
import AppError from "../../../shared/utils/appError";
import userRepository from "../../users/repositories/UserRepository";
import cache from "../../../shared/services/cache";
import { generateOTP } from "../../../shared/utils";

class RegistrationService {
  async execute(data) {
    const userExists = await userRepository.findByEmail(data.email);
    if (userExists) {
      throw new AppError("User already exists");
    }
    const otp = generateOTP();
    const cachedData = {
      email: data.email,
      isVerified: false,
      otp,
    };
    const tempId = uuid();
    cache.set(`${tempId}`, cachedData, 60 * 60 * 5);
    //  send email with otp

    // return only the tempId after sending the email

    return { tempId, otp };
  }
}

export default new RegistrationService();
