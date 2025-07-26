// NOTES CHANGES FROM SEQUELIZE TO MONGOOSE
// findAll()    ----> find()
// findByPk(id) ----> findById(id)
// update()     ----> findByIdAndUpdate(id)
// destroy()    ----> findByIdAndDelete(id)


const userModel = require('../models/user');



//create user
exports.createUser = async (req,res) => {
    const {fullName, email, password} = req.body
    try {
        const user = await userModel.create({fullName, email, password});
        res.json({ message: "User created", user });
    } catch (error) {
       console.error('Error occurred:', error);
       res.status(500).json({ error: 'Internal server error' }); 
    }
}

// Read all user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find(); // Mongoose equivalent of findAll
    res.json({ message: "List of all users", users });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get user by Id
exports.getUserByid = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id); // Mongoose equivalent of findByPk
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User identified by ID", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



//updateUser
exports.updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};