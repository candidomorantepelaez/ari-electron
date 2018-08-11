module.exports = withBasicController = (wrapper, service) => {
  wrapper.save = (req, res) =>
    service
      .save(req.body)
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));

  wrapper.update = (req, res) =>
    service
      .update(req.body)
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));

  wrapper.find = (req, res) =>
    service
      .find(req.body)
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));

  wrapper.findOne = (req, res) =>
    service
      .findOne({'_id': req.params.id})
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));

  wrapper.list = (req, res) =>
    service
      .list()
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));

  wrapper.remove = (req, res) =>
    service
      .remove({ '_id': req.params.id })
      .then(data => res.send(data))
      .catch(err => res.sendStatus(500).send(err));

  wrapper.count = (req, res) =>
    service
      .count()
      .then(data => res.send(data))
      .catch(err => res.sendStatus(500).send(err));

  return wrapper;
};

