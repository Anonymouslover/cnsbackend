const express   = require('express')
const multer = require('multer')
const app = express.Router()
const path = require('path')
// const upload = multer({ dest: '../frontend/public/Uploads/Resume' });
const jobapplyModel = require('../Models/jobapplyModel')
const jobpostingModel = require("../Models/jobpostingModel")
const ApplicationStatus = require("../Models/settings/applicationstatusModel")

app.use(express.json())

// const upload = multer({ dest: "uploads/" });

app.get("/", async (req,res) => {
    
    // const { title } = req.params.title;


    const jobdetail = await jobapplyModel.find({})
    // console.log(jobdetail)



    try{
        if(jobdetail){
            res.send(jobdetail)
         // const token = jwt.sign({ userId:superadmin._id }, 'login');
         // res.send({msg:"login successfully",token:token})
        }
     else{
       res.send({msg:"Some Issue Occured"})
     }
     }
     catch(err){
         res.send({msg:"sorry go to back"})
     }
         
})


app.get("/showdata/:id", async (req, res) => {
    const slug = req.params.id;
    
try{
    // const jobpost = await jobpostingModel.exists({jobpostid:slug});
    const jobupdatedata = await jobapplyModel.find({_id:slug}).select("_id").lean();
    console.log(jobupdatedata,48)
    if (jobupdatedata.length > 0) {
        const exists = await jobapplyModel.exists({_id: slug });
        console.log(exists)
        if (exists) {
            const data = await jobapplyModel.findOne({_id:slug})
            
            res.send(data)
        } else {
            res.status(404).send({ error: `The ${slug} resource was not found` });
       
        }
      } else {
            res.status(404).send({ error: `The ${slug} resource was not found` });
         
      }
    

} catch (err) {
    res.send({ msg: "Plz Try Again After Sometime", err: err.message })
  }

    
 
     
 })


app.get("/posts/:id", async (req,res) => {
    const id = req.params.id;
    // const { title } = req.params.title;


    const jobdetail = await jobpostingModel.findOne({_id:id})
    console.log(jobdetail)



    try{
        if(jobdetail){
            res.send(jobdetail)
         // const token = jwt.sign({ userId:superadmin._id }, 'login');
         // res.send({msg:"login successfully",token:token})
        }
     else{
       res.send({msg:"Some Issue Occured"})
     }
     }
     catch(err){
         res.send({msg:"sorry go to back"})
     }
         
})



app.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
    try{
      const  newcountry=await jobpostingModel.findOneAndUpdate({"jobpostid":id},{...req.body},{new:true})
      console.log(newcountry)
      res.send("job is updated")
    }
    catch(err){
      res.send("job is not changed")
    }
  
})


app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
     try{
        const newcaurse=await jobapplyModel.findByIdAndDelete({"_id":id})
        res.send("user is deleted")
     }
     catch(err){
      res.send("user is not deleted")
     }
  })


module.exports = app
