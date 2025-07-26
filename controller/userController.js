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