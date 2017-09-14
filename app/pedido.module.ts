import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {PedidoListaComponent} from './pedido-lista-venda.component';
import { PagamentoVendaComponent } from './pagamento-venda.component'

import { PedidoRoutingModule } from './pedido-routing.module';


@NgModule({
    imports: [
        CommonModule,
        PedidoRoutingModule,
        FormsModule
    ],
    declarations: [
        PedidoListaComponent,
        PagamentoVendaComponent
    ],
    exports: [
        PedidoListaComponent,
        PagamentoVendaComponent
    ]
})
export class ProdutoModule{}