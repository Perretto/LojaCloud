import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pagamento-venda',
    templateUrl: 'pagamento-venda.component.html'
})

export class PagamentoVendaComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit(): void {
        var valor = this.route.snapshot.queryParams['valor']
        $("#tVenda").html(valor)
    }
    
    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 120){
            document.getElementById("voltarpg").click();
        }
    }


}