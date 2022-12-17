import { Schema, model, Types } from "mongoose";

const userSchema = Schema(
	{
		firstName: { type: String, default: "" },
		lastName: { type: String, default: "" },
		userName: { type: String, max: 30, required: true },
		phoneNumber: { type: Number, max: 11 },
		email: { type: String, required: true },
		password: { type: String, required: true },
		confirmPassword: { type: String, required: true },
		skills: [String],
		teams: [Types.ObjectId],
		roule: { type: [String], default: ["user"] },
	},
	{
		timeStamp: true,
	},
);

const userModel = model("user", userSchema);

export default userModel;
