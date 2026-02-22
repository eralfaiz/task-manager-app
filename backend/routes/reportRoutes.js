const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  exportTasksReport,
  exportUsersReport,
} = require("../controllers/reportController");
const router = express.Router();

router.get("/exports/tasks", protect, adminOnly, exportTasksReport);
router.get("/exports/users", protect, adminOnly, exportUsersReport);

module.exports = router;
