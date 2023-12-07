const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./config/config");
const User = require("./models/userModel");
const Event = require("./models/eventModel");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const dbURI = config.dbURI;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret,
};

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await User.findById(payload.userId);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

app.use(passport.initialize());

const authenticate = passport.authenticate("jwt", { session: false });

/******************************** USER ROUTES ********************************/

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, config.secret, {
      expiresIn: "30d",
    });
    res.status(201).json({ message: "User registered successfully.", token });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", message: err });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed. User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed. Incorrect password." });
    }

    const token = jwt.sign({ userId: user._id }, config.secret, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user", authenticate, (req, res) => {
  res.json({ user: req.user });
});

/******************************* EVENT ROUTES ********************************/

/******************************** BASE ROUTE *********************************/

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dinder's backend!" });
});

const port = config.port || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
