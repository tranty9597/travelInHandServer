import express from "express"
import bodyParser from "body-parser"
import cors from "cors";

import connection from "./src/DbConnection"
import { User, Travel, TravelStep, RestaurantBooking } from "./src/routes"


const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.locals.connection = connection;
    next();
})

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", User);
app.use("/api", Travel)
app.use("/api", TravelStep)
app.use("/api", RestaurantBooking)

app.listen(port)

console.log('Server running at');