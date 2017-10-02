import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ClientesListaModule } from './clientes-lista.module';
import { FechaCaixaModule } from './fecha-caixa.module';
import { MenuFiscalModule } from './menu-fiscal.module';
import { PagamentoModule } from './pagamento.module';
import { PedidoModule } from './pedido.module';


@NgModule({ 
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        
        ClientesListaModule,
        FechaCaixaModule,
        MenuFiscalModule,
        PagamentoModule,
        PedidoModule
    ],
    declarations:[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    
} 