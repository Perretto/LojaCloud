const restful = require('node-restful')
const mongoose = restful.mongoose

const vendasLista = new mongoose.Schema ({
    idVenda: { type: Number, required: true },
    idCliente: { type: Number, required: true },
    idProd: { type: Number, required: true },
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

    valorDesconto: { type: Number, min:0, required: false }

})

module.exports = restful.model('vendas', vendasLista)