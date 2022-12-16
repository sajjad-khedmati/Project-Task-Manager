import { Router } from "express";

const router = Router();

router.get("/users", (req, res, next) => {
	res.json({
		message: "auth router done!",
	});
});

export default router;
