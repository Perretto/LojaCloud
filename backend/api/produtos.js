const restful = require('node-restful')
const mongoose = restful.mongoose

const produtosLista = new mongoose.Schema ({
    idProd: { type: Number, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, min: 0, required: true },
    unidadeMedida: { type: String, required: true },    
    cfop: { type: String, required: true },    
    ncm: { type: String, required: true },
    
    cstIcms: { type: String, required: true },
    valorIcms: { type: Number, min: 0, required: true },
    
    cstIpi: { type: String, required: true },
    valorIpi: { type: Number, min: 0, required: true },

    cstPis: { type: String, required: true },
    valorPis: { type: Number, min: 0, required: true },

    cstCofins: { type: String, required: true },
    valorCofins: { type: Number, min:0, required: true },

})

module.exports = restful.model('produtos', produtosLista)