const withLifecycleAction = (action) => {
  action.preAuthenticate = (req) => {
    logger.log("info", "preAuth");
    return true;
  }

  action.authenticate = (req) => {
    logger.log("info", "auth");
    return true;
  }

  action.postAuthenticate = (req) => {
    logger.log("info", "postAuth");
    return true;
  }

  action.validate = (req) => {
    logger.log("info", "modelValidation");
    return true;
  }

  action.execute = (req, res) => {
    logger.log("info", "execute");
    return new Promise((resolve, reject) => {
      resolve({ message: "perfect" });
    });
  }

  action.init = (req, res) => {
    logger.log("info", "in action");
    if (action.preAuthenticate(req) === false) {
      return res.status(401).send({message: "unauthorized"});
    }
    if (action.authenticate(req) === false) {
      return res.status(401).send({message: "unauthorized"});
    }
    if (action.postAuthenticate(req) === false) {
      return res.status(401).send({message: "unauthorized"});
    }
    if (action.validate(req) === false) {
      return res.status(400).send({message: "bad request"});
    }
    return action.execute(req, res)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send({ message: err }));
  }

  return action;
}

module.exports = withLifecycleAction;