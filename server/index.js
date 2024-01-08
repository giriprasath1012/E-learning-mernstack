const express = require("express")
const { collection, Address ,Dsa,Dsaquiz,Pythonquiz,Cquiz,Javaquiz,Javascriptquiz,Cplusplusquiz} = require("./db");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check && check.password==password){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/register",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            var nodemailer = require("nodemailer");
                    var transport = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: "71762105017@cit.edu.in",
                            pass: "2119#Prasath",
                        },
                    });
                    var mailOptions = {
                        from: "71762105017@cit.edu.in",
                        to: email,
                        subject: "Successfully Registered",
                        text: "You are successfully registered in Insight Masters Learning Platform. Enjoy your learning !!!",
                    };

                    transport.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        }
                    });

            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.get("/login/:email", async (req, res) => {
  const email = req.params.email; 
  try {
      const user = await collection.findOne({ email: email });

      if (!user) {
         
          return res.status(404).json({ error: 'User not found' });
      }
      const password = user.password;

      res.json({ password });
      var nodemailer = require("nodemailer");
      var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
              user: "71762105017@cit.edu.in",
              pass: "2119#Prasath",
            },
          });
      var mailOptions = {
                       from: "71762105017@cit.edu.in",
                        to: email,
                        subject: "From Insights Master",
                        text: "Your Password for the account "+email+" is  "+password+". Enjoy your learning !!!",
                    };

      transport.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        }
                    });

      //console.log(password);
  } catch (error) {
      console.error("Error fetching user data from the database:", error);
      res.status(500).send("Error fetching user data from the database");
  }
});

app.get("/contact", async(req, res) => {
    try {
      const addressData = await Address.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  
  app.get("/courses/dsa", async(req, res) => {
    try {
      const addressData = await Dsa.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/dsa/quiz", async(req, res) => {
    try {
      const addressData = await Dsaquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/python/quiz", async(req, res) => {
    try {
      const addressData = await Pythonquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/cprogram/quiz", async(req, res) => {
    try {
      const addressData = await Cquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/java/quiz", async(req, res) => {
    try {
      const addressData = await Javaquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/javascript/quiz", async(req, res) => {
    try {
      const addressData = await Javascriptquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });
  app.get("/courses/cplusplus/quiz", async(req, res) => {
    try {
      const addressData = await Cplusplusquiz.find({});
      res.json(addressData);
    } catch (error) {
      console.error("Error fetching address data from the database:", error);
      res.status(500).send("Error fetching address data from the database");
    } 
    
  });

app.listen(8000,()=>{
    console.log("port connected");
})
