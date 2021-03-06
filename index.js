import express from "express"
import bodyParser from "body-parser"
import cors from "cors";
import bearerToken from "express-bearer-token"

import { jwtMiddleware } from "./src/middleware"
import connection from "./src/DbConnection"
import { errorHandle } from "./src/utils"

import {
    Transportation,
    User,
    Travel,
    TravelStep,
    RestaurantBooking,
    Image,
    Hotel,
    Restaurant,
    City
} from "./src/routes"


const app = express();

app.use(cors())
app.use(bearerToken())
app.use(jwtMiddleware());
app.use((req, res, next) => {
    res.locals.connection = connection;
    next();
})

const port = process.env.PORT || 4200

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", User);
app.use("/", Travel)
app.use("/", TravelStep)
app.use("/", RestaurantBooking)
app.use("/", Image)
app.use("/", Hotel)
app.use("/", Restaurant)
app.use("/", Transportation)
app.use("/", City)

app.use(errorHandle.errorHandlerTopLevel)
app.listen(port)

console.log('Server running at', port);