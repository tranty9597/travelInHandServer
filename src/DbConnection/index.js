import mysql from "mysql"
import { Configs, Entities } from "./DbConfig"
const connection = mysql.createConnection({
    ...Configs
})

export default connection;

export { Entities };