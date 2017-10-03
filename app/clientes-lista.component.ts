import { Component, OnInit } from '@angular/core'
import { HostListener } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})

export class ClientesListaComponent {
    ngOnInit(): void {
        
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 120){
            document.getElementById("voltarpg").click();
        }
    }

}