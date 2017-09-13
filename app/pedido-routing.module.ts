import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoListaComponent } from './pedido-lista-venda.component'

const pedidoRoutes: Routes = [
    {
        path: 'pedido',
        component: PedidoListaComponent
    },
  
];

@NgModule({
    imports: [
        RouterModule.forChild(pedidoRoutes)
    ],
    exports: [RouterModule]
})

export class PedidoRoutingModule{}