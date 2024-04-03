const userDetails = require("../Models/UserDetails.js");

exports.signUp = (req, res) => {
  const { fname, lname, email, mobile, gender, dob, address, password } = req.body;
  userDetails.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      userDetails
        .create(req.body)
        .then((formData) => res.json(formData))
        .catch((err) => res.json(err));
    }
  });
};

exports.login = (req, res) => {
  const { mobile, password } = req.body;
  userDetails
    .findOne({ mobile: mobile })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("No records found! ");
      }
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json("Internal Server Error");
    });
};
