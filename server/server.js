const express = require('express');
const { Auth } = require("two-step-auth");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var check ;
var mail;

app.post("/register", async(req, res) => {
    try{  
        console.log(req.body.email)      
        const res1 = await Auth(req.body.email, "Company Name");
        console.log(res1);
        // console.log(res1.mail);
        // console.log(res1.OTP);
        mail=res1.mail;
        check = res1.OTP;
        if(res1.status === 200)
            res.redirect("/otp")
    }catch(err){
        console.log("Error here"+err);
    }
})

app.post("/otp", async(req, res) => {
    try{
        console.log(req.body.otp);
        if(Number(req.body.otp) === check){
            // alert("OTP Matched")
            console.log("OTP Matched")
            res.redirect("/details")
        }
        else{
            // alert("OTP Not Matched")
            console.log("OTP Not Matched")
            res.redirect("/register")
        }
    }catch(err){
        console.log(err);
    }
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server running on port " + port)
})