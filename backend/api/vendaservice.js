const _ = require('lodash')
const Vendas = require('./vendas')

Vendas.methods(['get', 'post', 'put', 'delete'])
Vendas.updateOptions({new: true, runValidators: true})

Vendas.route('count', function(req, res, next) {
    Vendas.count(function(error, value) {
      if(error) {
        res.status(500).json({errors: [error]})
      } else {
        res.json({value})
      }
    })
  })

  //Pesquisa de venda por ID
  Vendas.route('pesquisa', function(req, res, next) {
    var idVenda = req.param('idVenda');
    Produtos.find({ "idVenda": { $regex: idVenda, '$options':'i' }},
      function(err,data){
            res.json(data);
     });
})

module.exports = Vendas