"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const pedido_lista_venda_component_1 = require("./pedido-lista-venda.component");
const pagamento_venda_component_1 = require("./pagamento-venda.component");
const pedido_routing_module_1 = require("./pedido-routing.module");
let ProdutoModule = class ProdutoModule {
};
ProdutoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pedido_routing_module_1.PedidoRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            pedido_lista_venda_component_1.PedidoListaComponent,
            pagamento_venda_component_1.PagamentoVendaComponent
        ],
        exports: [
            pedido_lista_venda_component_1.PedidoListaComponent,
            pagamento_venda_component_1.PagamentoVendaComponent
        ]
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=pedido.module.js.map