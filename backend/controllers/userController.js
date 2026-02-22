const User = require("../models/User");
const Task = require("../models/Task");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: "member" }).select("-password");

    const userWithTaskCount = await Promise.all(
      users.map(async (user) => {
        const pendingTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "Pending",
        });

        const inProgressTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "In Progress",
        });

        const completedTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "Completed",
        });

        return {
          ...user._doc,
          pendingTask,
          inProgressTask,
          completedTask,
        };
      }),
    );

    res.status(200).json(userWithTaskCount);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getUserById = async (req, res, next) => {
  const user = await User.findById({ _id: req.params.id }).select("-password");
  res.send(user);
};

module.exports = {
  getUsers,
  getUserById,
};
