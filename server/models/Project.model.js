import { Schema, model, Types } from "mongoose";

const projectSchema = Schema({
	title: { type: String, default: "", required },
	text: { type: String, default: "" },
	image: { type: String, default: "/public/default.png" },
	tags: { type: [String], default: [""] },
	owner: { type: Types.ObjectId, required },
	teams: { type: [String], defalut: [""] },
	private: { type: Boolean, default: false },
	show: { type: Boolean, default: true },
});

const projectModel = model("project", projectSchema);

export default projectModel;
