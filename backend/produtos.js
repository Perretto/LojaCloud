const restful = require('node-restful')
const mongoose = restful.mongoose

const produtosLista = new mongoose.Schema ({
    idProd: { type: Number, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    unidadeMedida: { type: String, required: true },    
    cfop: { type: String, required: true },    
    ncm: { type: String, required: true },

    cstIcms: { type: Number, required: true },
    valorIcms: { type: Number, required: true },
    
    cstIpi: { type: Number, required: true },
    valorIpi: { type: Number, required: true },

    cstPis: { type: Number, required: true },
    valorPis: { type: Number, required: true },

    cstCofins: { type: Number, required: true },
    valorCofins: { type: Number, required: true },

})