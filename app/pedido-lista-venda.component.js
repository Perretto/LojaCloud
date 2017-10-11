"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const core_2 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var proximoitem = 0;
let PedidoListaComponent = class PedidoListaComponent {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ngOnInit() {
        document.getElementById("codbar").focus();
        document.getElementById('txtqtde').value = '1,000';
    }
    onfocusQtde() {
        document.getElementById("txtqtde").focus();
        $("#txtqtde").select();
    }
    onchangePesquisa() {
        if (document.getElementById('txtpesquisa').value != "") {
            $("#divprodfotos").hide();
            $("#divpesq").show();
            var descricao = document.getElementById('txtpesquisa').value;
            var url = "http://localhost:3000/api/produtos/pesquisa?descricao=" + descricao;
            $("#divpesq").html('');
            $.ajax({ url: url, success: function (result) {
                    for (var i in result) {
                        var resPesq = '<div class="card mb-3" style="width:15%;display: inline-block;vertical-align: bottom;">';
                        resPesq += '<img style="padding:3%;height:100px"  class="card-img-top" src="/app/image/mouse.jpeg" alt="Card image cap">';
                        resPesq += '<div class="card-block" style="background-color: #d4cfcf;padding: 1%;height:60px">';
                        resPesq += '<h6 class="card-title" style="text-align: -webkit-center;">' + result[i].descricao + '</h6>';
                        resPesq += '</div></div>';
                        //Adiciona nova linha no grid com as informações do retorno
                        $("#divpesq").append(resPesq);
                    }
                } });
        }
        else {
            $("#divpesq").hide();
            $("#divprodfotos").show();
        }
    }
    //Esta dando problema no angular por causa do value
    lostFocusQtde() {
        if (document.getElementById('txtqtde').value == "") {
            document.getElementById('txtqtde').value = '1,000';
        }
        document.getElementById("codbar").focus();
    }
    onchangeQtde() {
        if (document.getElementById('txtqtde').value == "") {
            document.getElementById('txtqtde').value = '1,000';
        }
    }
    isNumericQtde() {
        var numero = Number(document.getElementById('txtqtde').value);
        if (isNaN(numero)) {
            document.getElementById('txtqtde').value = '1,000';
        }
    }
    gravaProdutoTeste() {
        alert('');
        var strProdJS = "{idProd: 10 descricao: Produto de Teste10 valor: 10.99 unidadeMedida: UN cfop: 5405 ncm: 12345678 cstIcms: 102 valorIcms: 0.10 cstIpi: 01 valorIpi: 0.00 cstPis: 01 valorPis: 0.29 cstCofins: 03 valorCofins: 0.35}";
        let body = strProdJS;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Url = window.location.hostname + "/api/produtos";
        var a = this.http.post(Url, body);
        alert(a);
    }
    getProdutoTeste() {
        var cod = $("#codbar").val();
        var qtde = $("#txtqtde").val();
        var tTotal = 0;
        var valorItem = 0;
        var tTotalVenda = parseFloat(document.getElementById("lblTotal").innerHTML);
        var tItens = parseFloat(document.getElementById("itens").innerHTML);
        ;
        var item = 0;
        var url = "http://localhost:3000/api/produtos?idProd=" + cod;
        $.ajax({ url: url, success: function (result) {
                for (var i in result) {
                    item++;
                    tTotal = result[i].valor * parseFloat(qtde.toString());
                    tTotalVenda = tTotalVenda + tTotal;
                    proximoitem++;
                    //Adiciona nova linha no grid com as informações do retorno
                    $("#tbprodvenda > tbody:first").prepend('<tr><td>' + result[i].descricao + '</td><td style="text-align:center;">' + qtde + '</td><td style="text-align:right;">R$ ' + tTotal + '</td><td><i id="item' + proximoitem.toString() + '" class="fa fa-trash excluir"></i></td></tr>');
                    $(".excluir").click(function () {
                        var tr = $(this).closest('tr');
                        swal({
                            title: "Confirma?",
                            text: "Confirma exclusão do item!",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#e4eaeb",
                            confirmButtonText: "Não",
                            cancelButtonText: "Sim",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        }, function (isConfirm) {
                            if (!isConfirm) {
                                tr.fadeOut(400, function () {
                                    tr.remove();
                                    tItens = parseFloat(document.getElementById("itens").innerHTML) - 1;
                                    tTotalVenda = parseFloat(document.getElementById("lblTotal").innerHTML) - tTotal;
                                    document.getElementById("itens").innerHTML = tItens.toString();
                                    var quantReg = 0;
                                    quantReg = $("#tbprodvenda > tbody:first").find("tr").length;
                                    if (quantReg == 0) {
                                        proximoitem = 0;
                                        document.getElementById("itens").innerHTML = "0";
                                    }
                                    else {
                                        document.getElementById("itens").innerHTML = tItens.toString();
                                    }
                                    document.getElementById("lblTotal").innerHTML = tTotalVenda.toFixed(2);
                                    document.getElementById("codbar").focus();
                                });
                            }
                            else {
                                swal("Cancelado", "Your imaginary file is safe :)", "error");
                            }
                        });
                    });
                }
                document.getElementById("itens").innerHTML = proximoitem.toString();
                document.getElementById("lblTotal").innerHTML = tTotalVenda.toFixed(2);
                $("#codbar").val('');
                $("#txtqtde").val('1,000');
                document.getElementById('codbar').focus();
            } });
    }
    keyboardInput(event) {
        if (event.keyCode == 113) {
            document.getElementById("txtqtde").focus();
            $("#txtqtde").select();
        }
        if (event.keyCode == 118) {
            document.getElementById("pagto").click();
        }
    }
    formatBR(decimais) {
        $("#txtqtde").mask('00.000,000', { reverse: true });
    }
};
__decorate([
    core_2.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PedidoListaComponent.prototype, "keyboardInput", null);
PedidoListaComponent = __decorate([
    core_2.Component({
        moduleId: module.id,
        //provider: [swal],
        //selector: 'pedido-venda-app',
        selector: 'pedido-lista',
        templateUrl: 'pedido-lista-venda.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PedidoListaComponent);
exports.PedidoListaComponent = PedidoListaComponent;
//# sourceMappingURL=pedido-lista-venda.component.js.map