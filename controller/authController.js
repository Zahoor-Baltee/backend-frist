const authModel = require('../model/authModel')
// const bcrypt = require("bcrypt")
// let users = [
//     { userName: 'Admed', id: 1,email:'admed@gmail.com',pass:"787"},
//     { userName: 'Umair', id: 2,email:'umair@gmail.com',pass:"987"},
//     { userName: 'Usman', id: 3,email:'usman@gmail.com',pass:"7622"},
//     { userName: 'Umar', id: 4,email:'umar@gmail.com',pass:"98687"},
// ]

const getusersdata = (req,res)=>{
    res.status(200).send({success:true,data:users,message:"Fetched users data successfully"})
    }


const login = async(req,res)=>{
    try {
        console.log(req.body,'req.body')
        let {email,password} = await req.body;
        const checkUser = await authModel.findOne({"email":email})
        
        if(checkUser){
        console.log(checkUser,'checkUser')
            // const passTest = await bcrypt.compare(password,checkUser.password)
            if(checkUser){
                return res.status(200).send({
                    message: "login successfull",
                    success: true,
                data:{userId:checkUser._id,email:checkUser. email}})
            }else{
                return res.status(200).send({success:false,message:"Password Incorrect!"})
            }
        
        }else{
            return res.status(200).send({ success: false, message:"Email Not Found"}) 
        }
        
            }
            catch(e){
                console.log(e,'eeee')
                return res.status(401).send({ success: false, message: e.message });
            }
        }


const signup = async(req,res)=>{
    try{
const {email,userName,password} = req.body;

        // const checkEmail = users.filter((val,ind)=>{return val.email == email } )
        const checkEmail = await authModel.findOne({"email":email})
        console.log(checkEmail,"checkEmail");
        if(checkEmail){
            res.status(200).send({success:false,message:"Email Duplicate,try another one!"})
        }else{
            // users.push({email,userName,password,id:users.length+1})
            // const hassPass = await bcrypt.hash(password,12);
            const result = new authModel({email,userName,password}) 
            result.save()
            .then((response)=>{
                res.status(200).send({data:response,success:true,message:"Signup Successfull"})
            })
            .catch((err1)=>{
                res.status(400).send({success:false,message:err1.message})
            })
        }

    }
    catch(err){
        res.status(400).send({success:false,message:err.message})
    }
            }


module.exports = {getusersdata,login,signup}