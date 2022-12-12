import { Schema, model } from "mongoose";

const userSchema = Schema({
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	userName: { type: String, max: 30, required },
	email: { type: String, required },
	password: { type: String, required },
	confirmPassword: { type: String, required },
});
