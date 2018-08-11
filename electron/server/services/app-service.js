const AppRepository = include("server/model/app-repository");
const schemas = include("server/validations/schemas");
const Joi = require("joi");
const ramda = require("ramda");
const AppService = {};

const getAppFromReq = (req) => ramda.pick(["_id", "sellers", "name", "languages"], req.body);

AppService.save = (req, res) =>
  new Promise((resolve, reject) => {
    const app = getAppFromReq(req);
    Joi
      .validate(app, schemas.AppSchema)
      .then(AppRepository
        .save(req.body)
        .then(data => resolve(data))
        .catch(err => reject(err)))
      .catch(err => reject(err));
  });


AppService.update = (req, res) =>
  AppRepository.update(req.body)
  .then(function(data){
    res.send(data);
  }, function(err){
    res.status(500).send(err);
  });

AppService.find = (req, res) =>
  AppRepository.find(req.body)
  .then(function(data){
    res.send(data);
  }, function(err){
    res.status(500).send(err);
  });

AppService.findOne = (req, res) =>
  AppRepository.findOne({'_id': req.params.id})
  .then(function(data){
    res.send(data);
  }).catch(function(err){
    res.status(500).send(err);
  });

AppService.list = (req, res) =>
  AppRepository.list()
  .then(function(data){
    res.send(data);
  }).catch(function(err){
    res.status(500).send(err);
  });

AppService.remove = (req, res) =>
  AppRepository.remove({ '_id': req.params.id })
  .then(function(data){
    res.send(data);
  }).catch(function(err){
    res.sendStatus(500).send(err);
  });

AppService.count = (req, res) =>
  AppRepository.count()
  .then(function(data){
    res.send(data);
  }).catch(function(err){
    res.sendStatus(500).send(err);
  });

module.exports = AppService;