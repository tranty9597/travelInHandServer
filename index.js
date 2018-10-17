import express from "express"
import bodyParser from "body-parser"
import cors from "cors";

import connection from "./src/DbConnection"
import userRouters from "./src/routes/userRoutes";
import travelRoutes from "./src/routes/travelRoutes";
import travelStepRoutes from "./src/routes/travelStepRoutes";
import restaurantBookingRoutes from "./src/routes/restaurantBookingRoutes";


const app = express();

app.use(cors())

app.use((req, res, next) =>{
    res.locals.connection = connection;
    next();
})

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRouters);
app.use("/api", travelRoutes)
app.use("/api", travelStepRoutes)
app.use("/api", restaurantBookingRoutes)

app.listen(port)

console.log('Server running at' );