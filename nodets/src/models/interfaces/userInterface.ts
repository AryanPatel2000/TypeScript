import { DataTypes, Model, } from "sequelize";

import sequelizeConnection from "../../config/config";

 interface UserAttributes {

    id: number;
    firstName: string;
    lastName: string;
    city: string;

}

 export  {UserAttributes};