import mongoose from 'mongoose';

const donnerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : [true, "please enter name"]
    },
    blood : {
        type : String,
        require : [true, "please enter blood"]
    },
    
    number : {
        type : Number,
        require : [true, "please enter number"]

    }
})

let donnerModel = mongoose.model("donner", donnerSchema);
export default donnerModel