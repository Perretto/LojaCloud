import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuFiscalComponent } from './menu-fiscal.component'
import { PedidoListaComponent } from './pedido-lista-venda.component'
import { PagamentoVendaComponent } from './pagamento-venda.component'

const pedidoRoutes: Routes = [
    {
        path: 'pedido',
        component: PedidoListaComponent
    },

    {
        path: 'pedido/pagto',
        component: PagamentoVendaComponent
    },

    {
        path: 'pedido/menufiscal',
        component: MenuFiscalComponent
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(pedidoRoutes)
    ],
    exports: [RouterModule]
})

export class PedidoRoutingModule{}