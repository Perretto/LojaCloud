import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';

@Component({
    moduleId: module.id,
    //selector: 'pedido-venda-app',
    selector: 'pedido-lista',
    templateUrl: 'pedido-lista-venda.component.html'
})
    
export class PedidoListaComponent implements OnInit {
    
    ngOnInit(): void {
        (<HTMLInputElement>document.getElementById('txtqtde')).value = '1,000';
    }

    onfocusQtde(): void {
        document.getElementById("txtqtde").focus();
        }
    //Esta dando problema no angular por causa do value
    lostFocusQtde(): void{
        
        if((<HTMLInputElement>document.getElementById('txtqtde')).value == "") {
            (<HTMLInputElement>document.getElementById('txtqtde')).value = '1,000';
        }
    }
    
    onchangeQtde(): void {
        if((<HTMLInputElement>document.getElementById('txtqtde')).value == "") {
            (<HTMLInputElement>document.getElementById('txtqtde')).value = '1,000';
        }
    }

    isNumericQtde(): void {
        var numero = Number((<HTMLInputElement>document.getElementById('txtqtde')).value);
        if(isNaN(numero)){
            (<HTMLInputElement>document.getElementById('txtqtde')).value = '1,000';
        }
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 113){
            document.getElementById("txtqtde").focus();
        }

        if(event.keyCode == 118){
            document.getElementById("pagto").click();
        }

    }

}
