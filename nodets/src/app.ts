import express, {Request, Response} from 'express';
import * as dotenv from "dotenv";
import User from './models/user';
import { Sequelize } from "sequelize";
const app = express()
 
dotenv.config()
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
    res.send('Started')
})

const sequelizeConnection = require('./config/config')

const dbInit = () => {
    User.sync({ alter: true })
  }

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('The application is listening on port: ',port );
} )
console.log('Node.js TypeScript');



