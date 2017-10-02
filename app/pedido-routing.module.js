"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const fecha_caixa_component_1 = require("./fecha-caixa.component");
const menu_fiscal_component_1 = require("./menu-fiscal.component");
const pedido_lista_venda_component_1 = require("./pedido-lista-venda.component");
const pagamento_venda_component_1 = require("./pagamento-venda.component");
const pedidoRoutes = [
    {
        path: 'pedido',
        component: pedido_lista_venda_component_1.PedidoListaComponent
    },
    {
        path: 'pedido/pagto',
        component: pagamento_venda_component_1.PagamentoVendaComponent
    },
    {
        path: 'pedido/menufiscal',
        component: menu_fiscal_component_1.MenuFiscalComponent
    },
    {
        path: 'pedido/fechacaixa',
        component: fecha_caixa_component_1.FechaCaixaComponent
    },
];
let PedidoRoutingModule = class PedidoRoutingModule {
};
PedidoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(pedidoRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], PedidoRoutingModule);
exports.PedidoRoutingModule = PedidoRoutingModule;
//# sourceMappingURL=pedido-routing.module.js.map