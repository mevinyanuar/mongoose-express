const User = require("../models/user");

module.exports = {
  getUser: (req, res) => {
    User.find()
      .populate("addreses", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  },

  addUser: (req, res) => {
    const newUser = new User(req.body);
    newUser.save((error, result) => {
      if (error) {
        res.status(400).send({
          message: "user failed to add",
          error
        });
      } else {
        res.status(200).send({
          message: "user added",
          result
        });
      }
    });
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }, (error, result) => {
      console.log(result);
      if (error) {
        res.status(400).send({
          message: "user failed to delete",
          error
        });
      } else {
        res.status(200).send({
          message: "user deleted",
          result
        });
      }
    });
  },
  updateUser: (req, res) => {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      },
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: "user failed to update",
            error
          });
        } else {
          res.status(200).send({
            message: "user updated",
            result
          });
        }
      }
    );
  }
};
