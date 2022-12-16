import { Schema, model, Types } from "mongoose";

const userSchema = Schema({
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	userName: { type: String, max: 30, required },
	phoneNumber: { type: Number, max: 11 },
	email: { type: String, required },
	password: { type: String, required },
	confirmPassword: { type: String, required },
	skills: [String],
	teams: [Types.ObjectId],
	roule: { type: [String], default: ["user"] },
});

const userModel = model("user", userSchema);

export default userModel;
