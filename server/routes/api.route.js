import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import checkRankMiddleware from "../middlewares/checkRank.middleware.js";
import authRouter from "./auth.route.js";
import statsRouter from "./stats.route.js";
import financeRouter from "./finance.route.js";
import termRouter from "./term.route.js";
import captainRouter from "./captain.route.js";
import alertRouter from "./alert.route.js";
import scoutRouter from "./scout.route.js";
import sectorRouter from "./sector.route.js";
import attendanceRouter from "./attendance.route.js";
const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/stats", authMiddleware, statsRouter);
apiRouter.use(
  "/finance",
  authMiddleware,
  // TODO: add for certain functtions remove from others
  // checkRankMiddleware('general'),
  financeRouter
);
apiRouter.use("/term", authMiddleware, termRouter);
apiRouter.use("/captain", authMiddleware, captainRouter);
apiRouter.use("/alert", authMiddleware, alertRouter);
apiRouter.use("/scout", authMiddleware, scoutRouter);
apiRouter.use("/sector", authMiddleware, sectorRouter);
apiRouter.use("/attendance", authMiddleware, attendanceRouter);

export default apiRouter;
