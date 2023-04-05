const express=require("express")

const path=require("path")
const app=express()
const port = 8080 

const cors = require("cors")

const connection=require("./config/db")

app.use(cors())

const login=require("./Routes/LoginRoute")
const jobposting = require('./Routes/JobPostingRoute')
const jobapply  = require('./Routes/JobApplyRoute')
const departmentsetting = require('./Routes/Setting/DepartmentRoute')
const recruitsetting = require('./Routes/Setting/RecruitRoute')
const industrysetting = require('./Routes/Setting/IndustryRoute')
const skillsetsetting = require('./Routes/Setting/SkillsetRoute')
const hiringsetting = require('./Routes/Setting/HiringRoute')
const interviewsetting = require('./Routes/Setting/InterviewRoute')
const interviewnamesetting = require('./Routes/Setting/InterviewNameRoute')
const applicationsetting = require('./Routes/Setting/ApplicationRoute')
const processsetting = require('./Routes/Setting/ProcessRoute')

// const superRouter=require("./Routes/superadminRoute")

// const adduserRouter=require("./Routes/adduserRoute")

// const modeofdeliveryRouter=require("./Routes/Modeofdelivery")

// const mastercourseRouter=require("./Routes/MasterCourseRoute")

// const masterQualificationRoute=require("./Routes/QualificationRoute")

// const masterOrganistionRoute=require("./Routes/masterOrganistationRoute")

// const masterTaxRoute=require("./Routes/masterTaxRoute")

// const masterDesignationRoute=require("./Routes/masterDesignationRoute")

// const masterCountryRoute=require("./Routes/masterCountryRoute")

// const masterStateRoute=require("./Routes/masterStateRoute")

// const masterFollowupRoute=require("./Routes/masterFollowupRoute")

// app.use("/superadmin",superRouter)

// app.use("/adduser",adduserRouter)

// app.use("/modeofdelivery",modeofdeliveryRouter)

// app.use("/mastercourse",mastercourseRouter)

// app.use("/masterqualification",masterQualificationRoute)

// app.use("/masterorganisation",masterOrganistionRoute)

// app.use("/mastertaxroute",masterTaxRoute)

// app.use("/masterdesignation",masterDesignationRoute)

// app.use("/mastercountry",masterCountryRoute)

// app.use("/masterstate",masterStateRoute)

// app.use("/masterfollowup",masterFollowupRoute)

app.use("/api",login)
app.use("/jobcard",jobposting)
app.use("/jobapply",jobapply)
app.use("/setting",departmentsetting)
app.use("/setting/Recruit",recruitsetting)
app.use("/setting/industry",industrysetting)
app.use("/setting/skillset",skillsetsetting)
app.use("/setting/hiring",hiringsetting)
app.use("/setting/interview",interviewsetting)
app.use("/setting/interviewname",interviewnamesetting)
app.use("/setting/applications",applicationsetting)
app.use("/setting/process",processsetting)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,async()=>{
    await connection

    console.log(`server is running on ${port}`)

})