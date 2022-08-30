import bcrypt from "bcryptjs";
import environment from "../../../../config/environment";

import AppError from "../../../shared/utils/appError";
import cache from "../../../shared/services/cache";
import userRepository from "../../users/repositories/UserRepository";
import jwtClient from "../../../shared/services/jwtClient";

class SetPasswordService {
  async execute({ tempId, password }) {
    const cachedData = await cache.get(tempId);

    if (!cachedData) {
      throw new AppError("unauthorized", 401);
    }

    if (!cachedData.isVerified) {
      throw new AppError("verify your email", 400);
    }

    const hashedPassword = await bcrypt.hash(password, environment.saltRounds);
    const user = await userRepository.create({
      email: cachedData.email,
      password: hashedPassword,
    });

    if (!user) {
      throw new AppError("Something went wrong while creating user", 500);
    }

    cache.delete(tempId);
    const payload = {
      id: user.id,
    };
    const accessToken = jwtClient.generateAccessToken(payload);
    const refreshToken = jwtClient.generateRefreshToken(payload);
    return { accessToken, refreshToken };
  }
}

export default new SetPasswordService();
