import { Schema, model, Types } from "mongoose";

const teamSchema = Schema({
	title: { type: String, default: "", required },
	text: { type: String, default: "" },
	users: { type: [Types.ObjectId], default: [""] },
});

const teamModel = model("team", teamSchema);

export default teamModel;
