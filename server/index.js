import Application from "./server.js";

const DB_URL = "http://localhost:27017/Project&TaskManger";
const PORT = process.env.PORT || 3500;

new Application(PORT, DB_URL);
