const _ = require('lodash')
const Produtos = require('./produtos')

Produtos.methods(['get', 'post', 'put', 'delete'])
//Produtos.updateOptions({new: true, runValidators: true})
//Produtos.after('post', saveProdutos).after('put', saveProdutos)

module.exports = Produtos