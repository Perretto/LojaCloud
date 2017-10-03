import { Component, OnInit } from '@angular/core'
import { HostListener } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'fecha-caixa',
    templateUrl: 'fecha-caixa.component.html'
})

export class FechaCaixaComponent {
    ngOnInit(): void {
        
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 120){
            document.getElementById("voltarpg").click();
        }
    }

}