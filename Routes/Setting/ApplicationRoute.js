const express = require("express")


const app = express.Router()


const applicationstatussetting = require("../../Models/settings/applicationstatusModel")

app.use(express.json())


// Manage Department Route

app.post("/manage",async(req,res)=>{
    try{
      console.log(req)
      const status = req.body.status
      
        const datasave=new applicationstatussetting({status:status})
        await datasave.save()
        res.send("Department is created")
    }
    catch(err){
      res.send("department is not created")
    }
})



app.get("/",async(req,res)=>{

    const show = await applicationstatussetting.find()
try{
   if(show){
    res.send(show)
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


app.patch("/:id",async(req,res)=>{
    const id=req.params.id
    try{
      const  newcountry=await applicationstatussetting.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
      res.send("Department is updated")
    }
    catch(err){
      res.send("Department is not changed")
    }
  
})


app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const newcaurse=await applicationstatussetting.findByIdAndDelete({"_id":id})
      res.send("Application Status is deleted")
   }
   catch(err){
    res.send("Application is not deleted")
   }
})

// End Manage Department Route

module.exports=app
