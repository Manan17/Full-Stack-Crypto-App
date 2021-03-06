const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avator: Buffer,
});

userSchema.pre('save', function(next) {
  if(this.isModified('password')){
    bcrypt.hash(this.password,8,(err,hash) => {
      if(err) return next(err)

      this.password = hash;
      next();
    })
  }
})

userSchema.methods.comparePassword = async function(password) {
  if(!password) throw new Error("Password is missing");

  try{
    const result = await bcrypt.compare(password,this.password)
    return result;
  }catch(e) {
    console.log(e.message);
  }
}

userSchema.statics.isUserInDB = async function (email) {
  if (!email) throw new Error("Enter valid mail");
  try {
    const res = await this.findOne({ email });
    if (res) return true;

    return false;
  } catch (error) {
    console.log(error.message);
    return true;
  }
};


module.exports = mongoose.model("User", userSchema);
