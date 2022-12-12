import express from "express";
import mongoose from "mongoose";

import cors from "cors";

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
		this.#app.use(cors());
		this.#app.use(this.#express.json());
		this.#app.use(this.#express.urlencoded({ extended: true }));
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
		this.#app.get("/api", (req, res, next) => {
			return res.status(200).json({
				status: 200,
				success: true,
				message: "hello express App",
			});
		});
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
