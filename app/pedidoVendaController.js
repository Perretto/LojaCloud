(function() {
    app.controller('PedidoVendaCtrl', [
        '$http',
        '$location',
        'msgs',
        'tabs',
        PedidoVendaController
])

function PedidoVendaController($http, $location, msgs, tabs) {
    const vm = this
    const url = 'http://localhost:3000/api/produtos'//'/api/produtos'
    
    vm.create = function() {
        var strProdJS = '{idProd: 1, descricao: "Produto de Teste", valor: 10.99, unidadeMedida: "UN", cfop: "5405", ncm: "12345678", cstIcms: "102", valorIcms: "0.10", cstIpi: "01", valorIpi: "0.00", cstPis: "01", valorPis:"0.29", cstCofins: "03", valorCofins: "0.35"}';
        $http.post(url, strProdJS).then(function(response) {
        //$http.post(url, vm.produtos).then(function(response) {
          vm.refresh()
          console.log(response);
          //msgs.addSuccess('Operação realizada com sucesso!')
        //}).catch(function(response) {
        //  msgs.addErros(response.data.errors)
        })
      }


}
})()