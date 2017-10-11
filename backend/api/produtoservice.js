const _ = require('lodash')
const Produtos = require('./produtos')

Produtos.methods(['get', 'post', 'put', 'delete'])
Produtos.updateOptions({new: true, runValidators: true})
//Produtos.after('post', saveProdutos).after('put', saveProdutos)

Produtos.route('count', function(req, res, next) {
    Produtos.count(function(error, value) {
      if(error) {
        res.status(500).json({errors: [error]})
      } else {
        res.json({value})
      }
    })
  })

  Produtos.route('pesquisa', function(req, res, next) {
      var descName = req.param('descricao');
      Produtos.find({ "descricao": { $regex: descName, '$options':'i' }},
        function(err,data){
              res.json(data);
       });
  })

module.exports = Produtos