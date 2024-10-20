import Usermodel from '../schema /userSchema.js'
import donnerModel from '../schema /donnerSchema.js';
 
export const createUser = async (req, res) => {
    const { name, number , password} = req.body;
  
  
    try {
      if(name===undefined){
        res.status(400).json({
          success: false,
          message : "enter name",
        });
        return
      }
      if(number===undefined){
        res.status(400).json({
          success: false,
          message : "enter mobile number",
        });
        return
      }
      if(password===undefined){
        res.status(400).json({
          success: false,
          message : "enter password",
        });
        return
      }
     
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
          message: "enter valid credential",
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
  
 ////----------------------------------- DONNER CONTROLLER

 export const donnerController = async (req, res) => {
  const { name, blood, number } = req.body;
  try {
    const newDonor = await donnerModel.create({ name, blood, number });  // Renaming the result variable to 'newDonor'
     return res.status(200).json({
      success: true,
      data: newDonor,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      error: e.message || e,  // Adding 'message' to return a cleaner error message if available
    });
  }
};


///---------------------------- find donner 

export const findDonor = async (req, res) => {
  const { blood } = req.body;

  try {
    const donor = await donnerModel.find({ blood });  // Renaming the result variable to 'donor'
    
    if (!donor) {
      return res.status(400).json({
        success: false,
        message: "No donor found",
      });
    }

    return res.status(200).json({
      success: true,
      data: donor,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: e.message || "An error occurred", // Handling errors
    });
  }
};
