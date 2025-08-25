const express = require('express')
const mongoose = require("mongoose")
const User = require("./model/users")
console.log(User);
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


function islogin(req, res, next) {
    if (!req.headers.authorization){
        return res.json({
            success: false,
            message :"no authorization provided"

        })
    }
    let token = req.headers.authorization
    console.log(token);
    if (!token) {
        return res.json({
            success: false,
            message: "please login "

        })
    }
    let decode = jwt.verify(token, "okkkk");
    console.log(decode)
    if (!decode) {
        return res.json({
            success: true,
            message: "invalid token "
        })
    }
    req.user= decode.user;
    next()
}



app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "server running ok "
    })
})



app.get("/home", islogin,(req, res)=> {
     console.log("user -->", req.user)
    
    let username =req.user.name
    res.json({
        success: true,
        message: "welcome " + username

    })
})
// END POINT FOR SIGUP ==MEANS ADDING NEW  USERS INTO DATABASE 

app.post("/api/users/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let userexist = await User.findOne({ email: email })
        if (userexist) {
            return res.json({
                success: false,
                message: "user already exist with this email please login"
            })

        }
        let newuser = new User({
            name: name,
            email: email,
            password: password
        })
        await newuser.save()
        res.json({
            success: true,
            message: " user registred sucessfully  please login  to cntinue "

        })
    } catch (error) {
        console.log(error);
        res.json({
            message: error.message
        })
    }
})
/// after registered login process starts 
app.post("/api/auth/login", async (req, res) => {


    try {
        const { email, password } = req.body;
        let userexist = await User.findOne({ email: email })


        if (!userexist) {
            return res.json({
                success: false,
                message: "you are not registered"

            })

        }
        if (password != userexist.password) {
            return res.json({
                success: false,
                message: "invalid user"
            })
        }

        if (userexist.password == password) {
            let token = jwt.sign({ "user": userexist }, "okkkk");
            return res.json({
                success: true,
                message: "login sucessfulllty ",
                token: token
            })
        }

    } catch (error) {
        console.log(error.message)
        res.json({
            message: "error.message"
        })
    }

}
)

app.listen(4000, () => {
    console.log("server started ")
})
mongoose.connect("mongodb://127.0.0.1:27017/blogapp")
    .then(() => {
        console.log("db connected ")
    })
    .catch((err) => {
        console.log(err)
    })