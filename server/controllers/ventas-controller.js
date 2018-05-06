const ventasRepository = require("./../modelo/venta-repository");

let save = function(req, res, next) {
	ventasRepository.save(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
	
};

let update = function(req, res, next) {
	ventasRepository.update(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let find = function (req, res, next) {
	ventasRepository.find(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let findOne = (req, res, next) => {
	ventasRepository.findOne({'_id': req.params.id})
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let list = (req, res, next) => {
	ventasRepository.list()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let remove = (req, res, next) => {
	ventasRepository.remove({ '_id': req.params.id })
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
	remove
};