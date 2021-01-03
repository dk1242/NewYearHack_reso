const User = require("../models/user");

exports.create = (req, res, next) => {
  let history = [];
  history.push(req.body.reso);

  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { history: history } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "could not add a new resolution",
        });
      }
      res.status(200).send(`Resolution added`);
    }
  );
};

exports.allresos = (req, res) => {
  User.find({}).exec((error, response) => {
    if (error) {
      return res.status(400).json({
        error: "Could not find resos",
      });
    }
    let resos = [];
    response.forEach((user) => {
      user.history.forEach((reso) => {
        resos.push(reso);
      });
    });
    res.status(200).send(resos);
  });
};
