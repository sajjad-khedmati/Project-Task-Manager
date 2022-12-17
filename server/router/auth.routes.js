import { Router } from "express";

// controllers
import AuthHandler from "../controllers/autn.controlller.js";
import { registerValidator } from "../validations/auth.validation.js";
const Auth = new AuthHandler();

const router = Router();

router.post("/register", registerValidator(), Auth.register);
export default router;
