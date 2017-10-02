"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const app_routing_module_1 = require("./app-routing.module");
const clientes_lista_module_1 = require("./clientes-lista.module");
const fecha_caixa_module_1 = require("./fecha-caixa.module");
const menu_fiscal_module_1 = require("./menu-fiscal.module");
const pagamento_module_1 = require("./pagamento.module");
const pedido_module_1 = require("./pedido.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_module_1.AppRoutingModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            clientes_lista_module_1.ClientesListaModule,
            fecha_caixa_module_1.FechaCaixaModule,
            menu_fiscal_module_1.MenuFiscalModule,
            pagamento_module_1.PagamentoModule,
            pedido_module_1.PedidoModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map