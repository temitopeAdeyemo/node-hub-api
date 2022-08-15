import bcrypt from "bcryptjs";

import AppError from "../../../shared/utils/appError";
import userRepository from "../../users/repositories/UserRepository";
import jwtClient from "../../../shared/services/jwtClient";

class AuthenticationService {
  async execute({ email, password }) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password", 401);
    }

    const payload = {
      id: user.id,
    };
    const accessToken = jwtClient.generateAccessToken(payload);
    const refreshToken = jwtClient.generateRefreshToken(payload);

    return { accessToken, refreshToken };
  }
}

export default new AuthenticationService();
