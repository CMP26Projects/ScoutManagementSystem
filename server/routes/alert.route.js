const alertRouter = require("express").Router();
const alertController = require("../controllers/alert.controller");

alertRouter.get("/", alertController.getAllAlerts);
alertRouter.get("/:id", alertController.getAlert);
alertRouter.post("/post", alertController.CreateAlert);
alertRouter.delete("/:id", alertController.DeleteAlert);

module.exports = alertRouter;
