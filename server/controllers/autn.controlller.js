// models
import { validationResult } from "express-validator";

// models
import userModel from "../models/User.model.js";

// helpers
import mapValidationResult from "../utils/mapValidationResult.js";

export default class AuthHandler {
	async register(req, res, next) {
		const errors = mapValidationResult(validationResult(req).errors);
		res.json({ errors });
	}
}
