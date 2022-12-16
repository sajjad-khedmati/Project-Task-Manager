import express from "express";
import mongoose from "mongoose";
import path from "path";

import cors from "cors";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import router from "./router/index.routes.js";

export default class Application {
	#express = express;
	#app = express();

	constructor(PORT, DB_URL) {
		this.configApplication();
		this.configDatabase(DB_URL);
		this.createServer(PORT);
		this.routeHandler();
		this.errorHandler();
	}

	configApplication() {
		console.log(path.join(__dirname, "/public"));
		this.#app.use(cors());
		this.#app.use(this.#express.json());
		this.#app.use(this.#express.urlencoded({ extended: true }));
		this.#app.use(this.#express.static(path.join(__dirname, "/public")));
	}

	configDatabase(DB_URL) {
		mongoose.set("strictQuery", true);
		mongoose.connect(DB_URL, () => {
			console.log("connected to MONGODB successfully");
		});
	}

	createServer(PORT) {
		this.#app.listen(PORT, () => {
			console.log(`server run on port ${PORT}`);
		});
	}

	routeHandler() {
		this.#app.use("/api", router);
	}

	errorHandler() {
		this.#app.use((req, res, next) => {
			return res.status(404).json({
				status: 404,
				success: false,
				message: "page was not found",
			});
		});

		this.#app.use((error, req, res, next) => {
			const message = error.message || "Internal Server Error";
			const status = error.status || error.code || 500;

			return res.status(status).json({
				status,
				suceess: false,
				message,
			});
		});
	}
}
