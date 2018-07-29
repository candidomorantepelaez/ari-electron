const clientRepository = include("server/model/client-repository");
const routeRepository = include("server/model/route-repository");
const withBasicController = include("server/controllers/with-basic-controller");
const ramda = require("ramda");

const clientController = withBasicController({}, clientRepository);

clientController.findOneWithRuta = (req, res) =>
	clientRepository
		.findOne({ '_id': req.params.id })
		.then(function(client){
			routeRepository
				.findOne({ '_id': client.ruta })
				.then(function(route){
					res.send(ramda.merge(client, { route: route }));
				}, function(error){
					res.status(500).send(error);
				}
			)
		}, function(err){
			res.status(500).send(err);
		}
	);

clientController.listWithRuta = (req, res) =>
	clientRepository
		.list()
		.then(function(clients){
			routeRepository
				.list()
				.then(function(routes){
					res.send(ramda.map(cli => ramda.merge( cli, { route: ramda.filter(rut => rut._id === cli.route, routes)[0]}), clients));
				}, function(err){
					res.status(500).send(err);
				}
			);
		}).catch(function(err){
			res.status(500).send(err);
		}
	);

module.exports = clientController;
