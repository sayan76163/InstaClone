const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://sayan:sayan@cluster0.ygpp0vk.mongodb.net/instagram?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log("Not connected")
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
let InstaUser=mongoose.model("instaUser",userSchema)

module.exports=InstaUser