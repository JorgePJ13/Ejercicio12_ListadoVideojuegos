import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'app-loginErrorUsuario',
    templateUrl : './loginErrorUsuario.component.html',
    styleUrls : ['./loginErrorUsuario.component.css']
})
export class LoginErrorUsuarioComponent implements OnInit {
    
    errorUsuarioOculto : boolean = true; // no se muestra
    errorContrasenhaOculto : boolean = true; // no se muestra
    errorUsuarioVacio : boolean = true;
    errorContrasenhaVacio : boolean = true;
    opcion : number;

    constructor(route:ActivatedRoute) {
        this.opcion = route.snapshot.params["opcion"];
        this.seleccionarError();
    }

    ngOnInit() {
        
    }

    public seleccionarError() {
        if(this.opcion == 1) {
            this.errorUsuarioOculto=false; // se muestra error usuario
        }
        if(this.opcion == 2) {
            this.errorContrasenhaOculto=false; // se muestra error contraseña
        }
        
    }
}