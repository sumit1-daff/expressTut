const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id : {type : String, required : true, unique :  true},
    first_name : {type : String, required : true},
    last_name : {type : String, required : true},
    course : String,
    interests : [String],
    dob : {type : Date}
  });
  
  exports.User = mongoose.model("User",userSchema);
  