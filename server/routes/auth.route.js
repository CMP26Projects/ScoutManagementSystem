const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");
//const authMiddleware = require("../middlewares/auth.middleware");

authRouter.post("/signUp", authController.signup);
authRouter.post("/logIn", authController.login);
//authRouter.get("/me", authMiddleware, authController.me);

module.exports = authRouter;