const mongoose=require('mongoose')
const signupSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    mobile:{
        type:String,
        require:true
    }
    ,
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    }
})
const Signup=mongoose.model('Signup',signupSchema);
module.exports=Signup;
