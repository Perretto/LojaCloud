const _ = require('lodash')
const Clientes = require('./clientes')

Clientes.methods(['get', 'post', 'put', 'delete'])
Clientes.updateOptions({new: true, runValidators: true})

Clientes.route('count', function(req, res, next) {
    Clientes.count(function(error, value) {
      if(error) {
        res.status(500).json({errors: [error]})
      } else {
        res.json({value})
      }
    })
  })

  //Pesquisa de cliente por ID
  Clientes.route('pesquisa', function(req, res, next) {
    var idCliente = req.param('idCliente');
    Clientes.find({ "idVenda": { $regex: idCliente, '$options':'i' }},
      function(err,data){
            res.json(data);
     });
})

module.exports = Clientes