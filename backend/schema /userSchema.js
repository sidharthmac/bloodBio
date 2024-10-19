import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, "please enter name"]
    },
    EmailOrnumber : {
        type : String,
        require : [true, "please enter number"]
    },
    
    password : {
        type : String,
        require : [true, "please enter password"]

    }
})

let Usermodel = mongoose.model("user", userSchema);
export default Usermodel