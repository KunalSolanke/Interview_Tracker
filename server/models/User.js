const mongoose = require("mongoose");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 4,
    },
    email: {
      type: String,
      required: true,
      minLength: 4,
    },
    fullName: {
      type: String,
    },
    branch: {
      type: String,
    },
    year: Number,
    image: {
      contentType: String,
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
      minLength: 6,
    },

    role: {
      type: String,
      enum: ["admin", "member"],
      required: true,
      default: "member",
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    facebookProvider: {
      type: {
        id: String,
        token: String,
      },
      select: false,
    },
    githubProvider: {
      type: {
        id: String,
        token: String,
      },
      select: false,
    },
    azureProvider: {
      type: {
        id: String,
        token: String,
      },
      select: false,
    },
    googleProvider: {
      type: {
        id: String,
        token: String,
      },
      select: false,
    },
    refreshTokens: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", { getters: true, virtuals: true });

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = bycrpt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function (expiry) {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_REFRESH_KEY, {
    expiresIn: expiry,
  });
  return token;
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error({
      error: {
        message: "No user with given email",
      },
    });
  }

  if (bycrpt.compare(password, user.password)) {
    return user;
  }
  throw new Error({
    error: {
      message: "Invalid Credentials",
    },
  });
};

userSchema.statics.upsertAzureUser = async function (token, cb) {
  var that = this;
  let user = await this.findOne({
    "azureProvider.id": token.oid,
  });

  if (!user) {
    user = await this.findOne({
      email: token.preferred_username || token.email,
    });
  }
  if (!user) {
    var newUser = await new that({
      fullName: token.name,
      email: token.preferred_username || token.email,
      azureProvider: {
        id: token.oid,
      },
    });

    await newUser.save(function (error, savedUser) {
      if (error) {
        console.log(error);
      }
      return cb(error, savedUser);
    });
  } else {
    return cb(null, user);
  }
};

// userSchema.statics.upsertFbUser = function (
//   accessToken,
//   refreshToken,
//   profile,
//   cb
// ) {
//   var that = this;
//   return this.findOne(
//     {
//       "facebookProvider.id": profile.id,
//     },
//     function (err, user) {
//       // no user was found, lets create a new one
//       if (!user) {
//         var newUser = new that({
//           fullName: profile.displayName,
//           email: profile.emails[0].value,
//           facebookProvider: {
//             id: profile.id,
//             token: accessToken,
//           },
//         });

//         newUser.save(function (error, savedUser) {
//           if (error) {
//             console.log(error);
//           }
//           return cb(error, savedUser);
//         });
//       } else {
//         return cb(err, user);
//       }
//     }
//   );
// };

userSchema.statics.upsertGoogleUser = async function (
  accessToken,
  refreshToken,
  profile,
  cb
) {
  var that = this;
  let user = await this.findOne({
    "googleProvider.id": profile.id,
  });

  if (!user) {
    user = await this.findOne({
      email: profile.emails[0].value,
    });
  }
  if (!user) {
    var newUser = new that({
      fullName: profile.displayName,
      email: profile.emails[0].value,
      googleProvider: {
        id: profile.id,
        token: accessToken,
      },
    });

    await newUser.save(function (error, savedUser) {
      if (error) {
        console.log(error);
      }
      return cb(error, savedUser);
    });
  } else {
    return cb(null, user);
  }
};

userSchema.statics.upsertGithubUser = async function (
  accessToken,
  refreshToken,
  profile,
  cb
) {
  var that = this;
  let user = await this.findOne({
    "githubProvider.id": profile.id,
  });

  if (!user) {
    user = await this.findOne({
      email: profile.emails[0].value,
    });
  }
  if (!user) {
    var newUser = new that({
      fullName: profile.displayName,
      email: profile.emails[0].value,
      googleProvider: {
        id: profile.id,
        token: accessToken,
      },
    });

    await newUser.save(function (error, savedUser) {
      if (error) {
        console.log(error);
      }
      return cb(error, savedUser);
    });
  } else {
    return cb(null, user);
  }
};

userSchema.statics.findByRefreshToken = async function (token) {
  try {
    let { _id } = await jwt.verify(token, process.env.JWT_REFRESH_KEY);
    let user = await this.findById(_id);
    if (user.refreshTokens.includes(token)) {
      return user;
    } else {
      throw new Error("no User found");
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
