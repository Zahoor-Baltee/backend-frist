const postModel = require("../model/postModel");

// Send Data to database
const sendPostData = async (req, res) => {
  try {
    let { name, email, password, id, spa } = await req.body;
    const postData = new postModel({ name, email, password, id, spa });
    postData
      .save()
      .then((response) => {
        res.status(200).send({
          data: response,
          success: true,
          message: "data Save Successfull",
        });
      })
      .catch((err1) => {
        res.status(400).send({ success: false, message: err1.message });
      });
  } catch (e) {
    console.log(e, "eeee");
    return res.status(401).send({ success: false, message: e.message });
  }
};

// Get All Data From Database

const getPostData = async (req, res) => {
  try {
    await postModel
      .find({}, (err, data) => {
        if (err) {
          res.send(err).status(404);
        } else {
          res.send(data).status(200);
        }
      })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
};

//Get Data From Database By Id

const getPostDataByID = async (req, res) => {
  try {
    let id = req.params.id;
    await postModel
      .find({ _id: id }, (err, data) => {
        if (err) {
          res.send(err).status(404);
        } else {
          res.send(data).status(200);
        }
      })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
};

// Update Data From Database

const updatePostData = async (req, res) => {
  try {
  console.log(req.body);
  let { name, email, password, id, spa } = await req.body;
  // create New Note
  const updatePost = {};
  if (name) {
    updatePost.name = name;
  }
  if (email) {
    updatePost.email = email;
  }
  if (password) {
    updatePost.password = password;
  }
  if (id) {
    updatePost.id = id;
  }
  if (spa) {
    updatePost.spa = spa;
  }

  //find the user to be updated and update it

  let post = await postModel
    .findById(req.params.id)
    .clone()
    .catch((err) => {
      console.log(err);
    });
  if (!post) {
    return res.status(404).send("post Not Found");
  }

  post = await postModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatePost },
    { new: true }
  );
  res.send("Updation Successfull");

  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
};

//Delete Data From Database

const deletePostData = async (req, res) => {
  //find the user to be deleted and delete it

  try {
    let post = await postModel.findById(req.params.id);
  if (!post) {
    return res.status(404).send("Not Found");
  }
  post = await postModel.findByIdAndDelete(req.params.id);
  res.send("deleted Sussfully");
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message });
  }
  
};
module.exports = { sendPostData, getPostData, getPostDataByID, updatePostData,deletePostData };
