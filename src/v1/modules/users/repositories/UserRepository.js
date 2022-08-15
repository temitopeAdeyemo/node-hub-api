import User from "../../users/models/User";

class UserRepository {
  async create(data) {
    const user = await User.create(data);
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async save(user) {
    await user.save();
  }
}

const userRepository = new UserRepository();

export default userRepository;
