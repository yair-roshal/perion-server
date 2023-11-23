const UsersService = require("../services/users.service.js");

class UsersController {
  async getUsers(req, res) {
    try {
      const result = await UsersService.getUsers(req, res);
      if (result) return res.status(200).send(result);
      throw new Error("error-getUsers");
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  async createUser(req, res) {
    try {
      const result = await UsersService.createUser(req, res);
      if (result) return res.status(200).send(result);
      throw new Error("error-createUser");
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  async updateUser(req, res) {
    try {
      const result = await UsersService.updateUser(req, res);
      if (result) return res.status(200).send(result);
      throw new Error("error-updateUser");
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  handleError(res, error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
}

module.exports = new UsersController();
