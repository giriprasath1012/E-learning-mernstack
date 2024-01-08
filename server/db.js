const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/intern")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    }
})
const addressSchema = new mongoose.Schema({
    address: {
      type: String,
      required: true,
    },
  });
  const dsaSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
  });

  const dsaquizSchema=new mongoose.Schema({
    
    id: {
      type: String,
      required: true,
    },
  })

  

  
const collection = mongoose.model("collections",newSchema)
const Address = mongoose.model("contact", addressSchema);
const Dsa = mongoose.model("dsa", dsaSchema);
const Dsaquiz = mongoose.model("dsaquiz",dsaquizSchema);
const Pythonquiz = mongoose.model("pythonquiz",dsaquizSchema);
const Cquiz = mongoose.model("cquiz",dsaquizSchema);
const Javaquiz = mongoose.model("javaquiz",dsaquizSchema);
const Javascriptquiz = mongoose.model("javascriptquiz",dsaquizSchema);
const Cplusplusquiz = mongoose.model("cplusplusquiz",dsaquizSchema);


module.exports={collection,Address,Dsa,Dsaquiz,Pythonquiz,Cquiz,Javaquiz,Javascriptquiz,Cplusplusquiz};