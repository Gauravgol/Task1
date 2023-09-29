var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
 
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Gaurav:SIw1X0RdfhZAhZS9@cluster0.epwf7bv.mongodb.net/mydb?retryWrites=true&w=majority&appName=AtlasApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var mobileNumber= req.body.mobileNumber;
    var emailId = req.body.emailId;
    var street=req.body.street;
    var city=req.body.city;
    var state=req.body.state;
    var country=req.body.country;
    var loginId=req.body.loginId;
    var password=req.body.password;
    var timeStamp=new Date;

    var data = {
        "firstName":firstName,
        "lastName" : lastName,
        "mobileNumber":  mobileNumber,
        "emailId": emailId,
        "street":street,
        "city":city,
        "state":state,
        "country":country,
        "loginId":loginId,
        "password" : password,
        "timeStamp":timeStamp
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('display.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);
 

console.log("Listening on PORT 3000");