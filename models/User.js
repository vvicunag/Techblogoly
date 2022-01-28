const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { beforeCreate, beforeUpdate } = require("../utils/hooks")
const bcrypt = require("bcrypt");

class User extends Model {
   checkPassword (loginPw) {
    console.log(" new loginPw ->", loginPw);
    console.log(this.password);
    console.log(bcrypt.compareSync(loginPw, this.password));
    return bcrypt.compareSync(loginPw, this.password); 
  };
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks:{
        beforeCreate,
        beforeUpdate,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
