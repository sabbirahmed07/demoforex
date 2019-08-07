const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  local: {
    username: {
      type: String
      // required: true
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
      lowercase: true
    },
    password: {
      type: String
      // required: true
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    zip: {
      type: String
    },
    country: {
      type: String
    },
    cardNumber: {
      type: String
      // required: true
    },
    expirationDate: {
      type: Date
      // required: true
    },
    ccv: {
      type: Number
      // required: true
    }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

userSchema.pre("save", async function(next) {
  try {
    if (this.method !== "local") {
      next();
    }
    //Generate a salt
    const salt = await bcrypt.genSalt(10);

    //Generate a password hash(salt +hash)
    const passwordHash = await bcrypt.hash(this.local.password, salt);

    // Re-assign hashed version over original plain text password
    this.local.password = passwordHash;

    // console.log("salt", salt);
    // console.log("normal pass", this.password);
    // console.log("hashed password", passwordHash);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    // console.log("this.local.password", this.local.password);
    // console.log("newPassword", newPassword);
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};

//create a model
const User = mongoose.model("user", userSchema);

//export the model
module.exports = User;
