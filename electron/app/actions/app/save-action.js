module.exports = {
  validate: (req, res, next) => {
    if (appSchema.isValidate(req.body) === true) {
      next();
    }
    res.status(400).send({ message: "invalid data" });
  }
}