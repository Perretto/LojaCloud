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
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const clientes_lista_component_1 = require("./clientes-lista.component");
const fecha_caixa_component_1 = require("./fecha-caixa.component");
const menu_fiscal_component_1 = require("./menu-fiscal.component");
const pedido_lista_venda_component_1 = require("./pedido-lista-venda.component");
const pagamento_venda_component_1 = require("./pagamento-venda.component");
const pedido_routing_module_1 = require("./pedido-routing.module");
let PedidoModule = class PedidoModule {
};
PedidoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pedido_routing_module_1.PedidoRoutingModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [
            clientes_lista_component_1.ClientesListaComponent,
            fecha_caixa_component_1.FechaCaixaComponent,
            menu_fiscal_component_1.MenuFiscalComponent,
            pagamento_venda_component_1.PagamentoVendaComponent,
            pedido_lista_venda_component_1.PedidoListaComponent
        ],
        exports: [
            clientes_lista_component_1.ClientesListaComponent,
            fecha_caixa_component_1.FechaCaixaComponent,
            menu_fiscal_component_1.MenuFiscalComponent,
            pagamento_venda_component_1.PagamentoVendaComponent,
            pedido_lista_venda_component_1.PedidoListaComponent
        ]
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido-lista-venda.module.js.map