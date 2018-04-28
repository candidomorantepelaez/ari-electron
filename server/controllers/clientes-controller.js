const clienteRepository = require("./../modelo/cliente-repository");

let index = (req, res, next) => res.send("prueba");		

let save = function(req, res, next) {
	clienteRepository.save(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
	
};

let update = function(req, res, next) {
	clienteRepository.update(req.body)
	.then(function(data){
		console.log('data:'+ data);
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let find = function (req, res, next) {
	clienteRepository.find(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(500).send(err);
	});
};

let findOne = (req, res, next) => {
	clienteRepository.findOne({'_id': req.params.id})
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let list = (req, res, next) => {
	clienteRepository.list()
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.status(500).send(err);
	});
};

let remove = (req, res, next) => {
	clienteRepository.remove({ '_id': req.params.id })
	.then(function(data){
		res.send(data);
	}).catch(function(err){
		res.sendStatus(500).send(err);
	});
};

module.exports = {
	index,
	save,
	update,
	find,
	findOne,
	list,
	remove
};

