import { Component, OnInit } from '@angular/core'
import {HostListener} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'menu-fiscal',
    templateUrl: 'menu-fiscal.component.html'

})

export class MenuFiscalComponent implements OnInit {
    
    ngOnInit(): void {

    }
    
    disableTextBox(): void {
        //document.getElementById(chvcfe).disabled=true;
        var obj = document.getElementById('cboFormas');
        if(obj.nodeValue = '01-CONSULTAR STATUS OPERACIONAL') {
            alert('')
        }
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        if(event.keyCode == 120){
            document.getElementById("voltarpg").click();
        }
    }

}