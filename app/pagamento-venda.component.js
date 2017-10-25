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
const router_1 = require("@angular/router");
let PagamentoVendaComponent = class PagamentoVendaComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        var valor = this.route.snapshot.queryParams['valor'];
        $("#tVenda").html(valor);
    }
    keyboardInput(event) {
        if (event.keyCode == 120) {
            document.getElementById("voltarpg").click();
        }
    }
};
__decorate([
    core_2.HostListener('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], PagamentoVendaComponent.prototype, "keyboardInput", null);
PagamentoVendaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pagamento-venda',
        templateUrl: 'pagamento-venda.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], PagamentoVendaComponent);
exports.PagamentoVendaComponent = PagamentoVendaComponent;
//# sourceMappingURL=pagamento-venda.component.js.map