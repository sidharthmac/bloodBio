import Usermodel from '../schema /userSchema.js'
 
export const createUser = async (req, res) => {
    const { name, number , password} = req.body;
  
    try {
      const data = await Usermodel.create({ name, number , password});
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  };
  
  export const getUser = async (req,res)=>{
    try{
    const data = await Usermodel.find()
    res.status(200).json({
        success: true,
        data,
      });
    }catch(e){
        res.status(500).json({
            success: false,
            error,
          });
    }
  }
  
  //// loging User 

  export const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username
      const response = await Usermodel.findOne({ name: username });
  
      if (!response) {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }
  
      // Compare the password
      if (response.password === password) {
        return res.status(200).json({
          success: true,
          message: "Login successful",
          IsUser: true,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
          IsUser: false,
        });
      }
    } catch (e) {
      console.log("Error while login", e);
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
  
 