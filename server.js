const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const carRouter = require("../Routers/carRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan());

server.use("/api/cars", carRouter);

module.exports = server;
