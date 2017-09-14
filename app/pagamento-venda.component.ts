import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagamento-venda',
    templateUrl: 'pagamento-venda.component.html'
})

export class PagamentoVendaComponent implements OnInit {
    ngOnInit(): void {
        
    }
    
    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 120){
            document.getElementById("voltarpg").click();
        }
    }


}