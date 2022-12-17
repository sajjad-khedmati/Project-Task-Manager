import { body } from "express-validator";

export const registerValidator = () => {
	return [
		body("username").notEmpty().withMessage("username shuldnt be empty!"),
		body("phoneNumber").isMobilePhone("fa-IR").withMessage("phone Number incurrect!"),
	];
};
