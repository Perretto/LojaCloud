const _ = require('lodash')
const Produtos = require('./produtos')

Produtos.methods(['get', 'post', 'put', 'delete'])
Produtos.updateOptions({new: true, runValidators: true})
Produtos.after('post', saveProdutos).after('put', saveProdutos)

function saveProdutos(req, res, next) {

}

module.exports = Produtos