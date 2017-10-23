const restful = require('node-restful')
const mongoose = restful.mongoose

const clientesLista = new mongoose.Schema ({
    idCliente: { type: Number, required: true },
    nomeCliente: { type: string, required: true },
    limiteCredito: { type: Number, min: 0, required: true },
    logradouro: { type: string, required: true },
    bairro: { type: string, required: true },
    numero: { type: string, required: true },
    cep: { type: string, required: true },
})

module.exports = restful.model('clientes', clientesLista)