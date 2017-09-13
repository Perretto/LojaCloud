import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProdutoModule } from './pedido.module';

@NgModule({ 
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ProdutoModule
    ],
    declarations:[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    
} 