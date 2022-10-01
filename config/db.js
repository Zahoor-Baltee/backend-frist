const mongoose = require("mongoose");


const dbCnnection = async()=>{
    try{
        mongoose.connect("mongodb+srv://zahoorbaltee:balti1122@cluster1.xii5zwk.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          mongoose.connection.on('connected',()=>{
              console.log('connected')
          })
          mongoose.connection.on('error',(err)=>{
              console.log('error',err)
          })
        
    }
    catch(err){
        console.log("err"+err.message);
    }
}

module.exports = dbCnnection;