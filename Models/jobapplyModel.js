const mongoose=require("mongoose")

const jobapplySchema=mongoose.Schema({
    
    
    firstname:{type:String,required:false},
    email:{type:String,required:false},
    graduationyear:{type:String,required:false},
    experienceyear:{type:String,required:false},
    currentctc:{type:String,required:false},
    noticeperiod:{type:String,required:false},
    vacancy:{type:String,required:false},
    preferredlocation:{type:String,required:false},
    contact:{type:String,required:false},
    gender:{type:String,required:false},
    currentemployer:{type:String,required:false},
    expectedctc:{type:String,required:false},
    skillset:{type:String,required:false},
    currentlocation:{type:String,required:false},
    resume:{type:String,required:false},
    profile:{type:String,required:false},
},
{timestamps:true}
)

const jobapplyModel=mongoose.model("jobapply",jobapplySchema)

module.exports=jobapplyModel