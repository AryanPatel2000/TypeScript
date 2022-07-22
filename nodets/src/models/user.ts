import {Sequelize,DataTypes, Model  } from "sequelize";
import { UserAttributes } from "./interfaces/userInterface";
import sequelizeConnection from "../config/config";

class User extends Model<UserAttributes> implements UserAttributes{

   public id! : number
   public firstName!: string;
   public lastName!: string;
   public city!: string;
   
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.TEXT
      },
}, {
    timestamps: false,
    sequelize : sequelizeConnection, 
    modelName: 'User' 
  })

export default User;