const boom = require('boom');
const bcrypt = require('bcrypt');
const { models } = require('./../libs/sequelize');
const { da } = require('@faker-js/faker');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password; 
    return newUser;
  }

  async find() {
    const rst = await models.User.findAll({
      include: ['customer'],
    });
    return rst;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    } else {
      return user;
    }
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    } else {
      await user.destroy();
      return { id };
    }
  }
}

module.exports = UserService;
