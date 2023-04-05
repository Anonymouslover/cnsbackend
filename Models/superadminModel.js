const mongoose=require("mongoose")

const superadminSchema=mongoose.Schema({
    firstname:{type:String,required:false},
    lastname:{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const superadminModel=mongoose.model("superadmin",superadminSchema)

module.exports=superadminModel