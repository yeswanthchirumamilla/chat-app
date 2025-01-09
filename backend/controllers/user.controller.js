import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const { userId } = req.body; 
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
