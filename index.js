import express from "express"
import bodyParser from "body-parser"
import cors from "cors";
import bearerToken from "express-bearer-token"

import { jwtMiddleware } from "./src/middleware"
import connection from "./src/DbConnection"
import { errorHandle } from "./src/utils"

import { User, Travel, TravelStep, RestaurantBooking } from "./src/routes"


const app = express();

app.use(cors())
app.use(bearerToken())
app.use(jwtMiddleware());
app.use((req, res, next) => {
    res.locals.connection = connection;
    next();
})

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", User);
app.use("/", Travel)
app.use("/", TravelStep)
app.use("/", RestaurantBooking)

app.use(errorHandle.errorHandlerTopLevel)
app.listen(port)

console.log('Server running at', port);