module.exports = withBasicService = (wrapper, repository) => {
  wrapper.save = (req, res) =>
    repository.save(req.body)
    .then(function(data){
      res.send(data);
    }, function(err){
      res.status(500).send(err);
    });

  wrapper.update = (req, res) =>
    repository.update(req.body)
    .then(function(data){
      res.send(data);
    }, function(err){
      res.status(500).send(err);
    });

  wrapper.find = (req, res) =>
    repository.find(req.body)
    .then(function(data){
      res.send(data);
    }, function(err){
      res.status(500).send(err);
    });

  wrapper.findOne = (req, res) =>
    repository.findOne({'_id': req.params.id})
    .then(function(data){
      res.send(data);
    }).catch(function(err){
      res.status(500).send(err);
    });

  wrapper.list = (req, res) =>
    repository.list()
    .then(function(data){
      res.send(data);
    }).catch(function(err){
      res.status(500).send(err);
    });

  wrapper.remove = (req, res) =>
    repository.remove({ '_id': req.params.id })
    .then(function(data){
      res.send(data);
    }).catch(function(err){
      res.sendStatus(500).send(err);
    });

  wrapper.count = (req, res) =>
    repository.count()
    .then(function(data){
      res.send(data);
    }).catch(function(err){
      res.sendStatus(500).send(err);
    });

  return wrapper;
};
