import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import { FechaCaixaComponent } from './fecha-caixa.component'
import { MenuFiscalComponent } from './menu-fiscal.component'
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
        FechaCaixaComponent,
        MenuFiscalComponent,
        PedidoListaComponent,
        PagamentoVendaComponent
    ],
    exports: [
        FechaCaixaComponent,
        MenuFiscalComponent,
        PedidoListaComponent,
        PagamentoVendaComponent
    ]
})
export class ProdutoModule{}