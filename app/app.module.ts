import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FechaCaixaModule } from './fecha-caixa.module';
import { MenuFiscalModule } from './menu-fiscal.module';
import { ProdutoModule } from './pedido.module';
import { PagamentoModule } from './pagamento.module';


@NgModule({ 
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        
        MenuFiscalModule,
        ProdutoModule,
        PagamentoModule,
        FechaCaixaModule
    ],
    declarations:[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    
} 