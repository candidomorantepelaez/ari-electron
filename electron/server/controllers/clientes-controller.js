const clienteRepository = require("./../modelo/cliente-repository");
const rutaRepository = require("./../modelo/ruta-repository");
const ramda = require("./../../node_modules/ramda/dist/ramda");

let index = (req, res, next) => res.send("prueba");

let save = function(req, res, next) {
	clienteRepository
		.save(req.body)
		.then(function(data){
			res.send(data);
		}, function(err){
			res.status(500).send(err);
		}
	);
};

let update = function(req, res, next) {
	clienteRepository
		.update(req.body)
		.then(function(data){
			res.send(data);
		}, function(err){
			res.status(500).send(err);
		}
	);
};

let find = function (req, res, next) {
	clienteRepository
		.find(req.body)
		.then(function(data){
			res.send(data);
		}, function(err){
			res.status(500).send(err);
		}
	);
};

let findOne = (req, res, next) => {
	clienteRepository
		.findOne({'_id': req.params.id})
		.then(function(data){
			res.send(data);
		}).catch(function(err){
			res.status(500).send(err);
		}
	);
};

let findOneWithRuta = function (req, res, next) {
	clienteRepository
		.findOne({ '_id': req.params.id })
		.then(function(cliente){
			rutaRepository
				.findOne({ '_id': cliente.ruta })
				.then(function(ruta){
					res.send(ramda.merge(cliente, { ruta: ruta }));
				}, function(error){
					res.status(500).send(error);
				}
			)
		}, function(err){
			res.status(500).send(err);
		}
	);
};

let list = (req, res, next) => {
	clienteRepository
		.list()
		.then(function(data){
			res.send(data);
		}).catch(function(err){
			res.status(500).send(err);
		}
	);
};

let listWithRuta = (req, res, next) => {
	clienteRepository
		.list()
		.then(function(clientes){
			rutaRepository
				.list()
				.then(function(rutas){
					console.log("hola");
					res.send(ramda.map(cli => ramda.merge( cli, {ruta: ramda.filter(rut => rut._id === cli.ruta, rutas)[0]}), clientes));
				}, function(err){
					res.status(500).send(err);
				}
			);
		}).catch(function(err){
			res.status(500).send(err);
		}
	);
};

let remove = (req, res, next) => {
	clienteRepository
		.remove({ '_id': req.params.id })
		.then(function(data){
			res.send(data);
		}).catch(function(err){
			res.sendStatus(500).send(err);
		}
	);
};

let count = (req, res, next) => {
	clienteRepository
		.count()
		.then(function(data){
			res.send(data);
		}).catch(function(err){
			res.sendStatus(500).send(err);
		}
	);
}

module.exports = {
	index,
	save,
	update,
	find,
	findOne,
	findOneWithRuta,
	list,
	listWithRuta,
	remove,
	count
};
