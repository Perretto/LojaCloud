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
let PedidoListaComponent = class PedidoListaComponent {
    ngOnInit() {
        document.getElementById('txtqtde').value = '1,000';
    }
    onfocusQtde() {
        document.getElementById("txtqtde").focus();
    }
    //Esta dando problema no angular por causa do value
    lostFocusQtde() {
        if (document.getElementById('txtqtde').value == "") {
            document.getElementById('txtqtde').value = '1,000';
        }
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
    keyboardInput(event) {
        if (event.keyCode == 113) {
            document.getElementById("txtqtde").focus();
        }
        if (event.keyCode == 118) {
            document.getElementById("pagto").click();
        }
    }
};
__decorate([
    core_2.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PedidoListaComponent.prototype, "keyboardInput", null);
PedidoListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'pedido-venda-app',
        selector: 'pedido-lista',
        templateUrl: 'pedido-lista-venda.component.html'
    })
], PedidoListaComponent);
exports.PedidoListaComponent = PedidoListaComponent;
//# sourceMappingURL=pedido-lista-venda.component.js.map