const User = require("../models/user.model");

class UsersService {
  async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  async createUser(req, res) {
    const { email, city } = req.body;
    try {
      const newUser = await User.create({ email, city });
      return { message: "User created successfully", result: newUser };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async updateUser(req, res) {
    const { email, city } = req.body;
    try {
      const [updatedRows] = await User.update({ city }, { where: { email } });
      if (updatedRows > 0) {
        return { message: "User updated successfully" };
      } else {
        throw new Error("User not found or no updates applied");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
}

module.exports = new UsersService();
