import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import { ClientesListaComponent } from './clientes-lista.component';
import { FechaCaixaComponent } from './fecha-caixa.component';
import { MenuFiscalComponent } from './menu-fiscal.component';
import { PedidoListaComponent } from './pedido-lista-venda.component';
import { PagamentoVendaComponent } from './pagamento-venda.component'

import { PedidoRoutingModule } from './pedido-routing.module';


@NgModule({
    imports: [
        CommonModule,
        PedidoRoutingModule,
        FormsModule
    ],
    declarations: [
        ClientesListaComponent,
        FechaCaixaComponent,
        MenuFiscalComponent,
        PagamentoVendaComponent,
        PedidoListaComponent
    ],
    exports: [
        ClientesListaComponent,
        FechaCaixaComponent,
        MenuFiscalComponent,
        PagamentoVendaComponent,
        PedidoListaComponent
    ]
})
export class PedidoModule{}