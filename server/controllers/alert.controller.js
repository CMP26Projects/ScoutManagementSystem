const db = require("../database/db");

const alertController = {
  getAlert: async (req, res) => {
    console.log(req.params);
    const { id } = req.params; //string

    const alert = await db.query(
      `SELECT * FROM "Notification" WHERE "NotificationId" = ${Number(id)};`
    );

    if (!alert) return res.status(404).json({ error: "Alert not found" });

    res
      .status(200)
      .json({ success: true, message: "Alert successfully found", alert });
  },

  CreateAlert: async (req, res) => {
    console.log(req.body);
    const { title, message, type } = req.body;
    if (!title || !message || !type)
      return res.status(400).json({ error: "Missing input" });

    const newAlert = await db.query(
      `INSERT INTO "Notification" ( "message" )
        VALUES( '${message}' ) RETURNING *;`
    );

    if (!newAlert) return res.status(400).json({ error: "Cannot Post" });

    res.status(200).json({ success: true, newAlert });
  },

  DeleteAlert: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    const Alerts = await db.query(`SELECT * FROM "Notification";`);

    const alertsArr = Alerts.rows;

    if (!alertsArr.find((item) => item.NotificationId === Number(id)))
      return res.status(404).json({ error: "Alert to be deleted not found" });

    try {
      await db.query(
        `DELETE FROM "Notification" WHERE "NotificationId" = ${Number(id)};`
      );

      alertsArr.filter((item) => item.NotificationId !== Number(id));
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false });
    }
  },

  getAllAlerts: async (req, res) => {
    const Alerts = await db.query(`SELECT * FROM "Notification";`);

    if (!Alerts.rows.length)
      return res.status(400).json({ error: "No alerts found" });

    res.status(200).json({ status: true, data: Alerts.rows });
  },
};

module.exports = alertController;
