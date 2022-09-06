import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";

const swaggerFile = require("../swagger_output.json");

const app = express();

app.use(express.json());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
