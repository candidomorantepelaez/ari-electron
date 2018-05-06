const productoRepository = require("./../modelo/producto-repository");

let save = function(req, res, next) {
	productoRepository.save(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
	
};

let update = function(req, res, next) {
	productoRepository.update(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let find = function (req, res, next) {
	productoRepository.find(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let findOne = (req, res, next) => {
	productoRepository.findOne({'_id': req.params.id})
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let list = (req, res, next) => {
	productoRepository.list()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let remove = (req, res, next) => {
	productoRepository.remove({ '_id': req.params.id })
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