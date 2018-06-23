const rutaRepository = require("./../modelo/ruta-repository");

let save = function(req, res, next) {
	rutaRepository.save(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});

};

let update = function(req, res, next) {
	rutaRepository.update(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let find = function (req, res, next) {
	rutaRepository.find(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let findOne = (req, res, next) => {
	rutaRepository.findOne({'_id': req.params.id})
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let list = (req, res, next) => {
	rutaRepository.list()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let remove = (req, res, next) => {
	rutaRepository.remove({ '_id': req.params.id })
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.sendStatus(500).send(err);
	});
};

let count = (req, res, next) => {
	rutaRepository.count()
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