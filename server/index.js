import dotenv from "dotenv";
dotenv.config();

import Application from "./server.js";

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3500;

new Application(PORT, DB_URL);
