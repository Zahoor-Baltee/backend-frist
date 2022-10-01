const express = require("express");

const router = express.Router();

// let postData = [
//   { postName: "post 1", postId: 7, userId: 1 },
//   { postName: "post 2", postId: 8, userId: 1 },
//   { postName: "post 3", postId: 9, userId: 2 },
// ];

const {sendPostData, getPostData, getPostDataByID, updatePostData,deletePostData} = require("../controller/postController")
router.get("/getuserpostid:id",getPostDataByID);
router.get("/getuserpost",getPostData);
router.post("/senduserpost",sendPostData);
router.delete("/deleteuserpost:id",deletePostData);
router.put("/updateuserpost:id",(req,res)=>{updatePostData(req,res)});

module.exports = router;
