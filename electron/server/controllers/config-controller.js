const configRepository = require("./../modelo/config-repository");

let save = function(req, res, next) {
	configRepository.save(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});

};

let update = function(req, res, next) {
	configRepository.update(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let find = function (req, res, next) {
	configRepository.find(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let findOne = (req, res, next) => {
	configRepository.findOne({'_id': req.params.id})
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let list = (req, res, next) => {
	configRepository.list()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let remove = (req, res, next) => {
	configRepository.remove({ '_id': req.params.id })
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.sendStatus(500).send(err);
	});
};

let count = (req, res, next) => {
	configRepository.count()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.sendStatus(500).send(err);
	});
};

module.exports = {
	save,
	update,
	find,
	findOne,
	list,
	remove,
	count
};