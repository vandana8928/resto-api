const mongoose=require('mongoose')
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true

    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],
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
    ,
    salary:{
        type:String,
        require:true
    }


})
const Person=mongoose.model('Person',personSchema);
module.exports=Person;
