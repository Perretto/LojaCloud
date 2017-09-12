import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {ProdutoListaComponent} from './produto-lista.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ProdutoListaComponent
    ],
    exports: [
        ProdutoListaComponent
    ]
})
export class ProdutoModule{}