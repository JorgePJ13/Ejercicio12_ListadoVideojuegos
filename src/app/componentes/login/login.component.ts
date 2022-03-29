import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    username : string = "";
    password : string = "";
    
    constructor(private router: Router ){
    }

    ngOnInit() {
        
    }

    LoginUser() {
        if(this.username == "JorgePJ13" && this.password == "admin12345") {
            this.router.navigate(['/menu'])
            console.log("Menu de Bienvenida")
        }
        if(this.username != "JorgePJ13" && this.password == "admin12345") {
            this.router.navigate(['/loginErrorUsuario'])
        }
        if(this.username == "JorgePJ13" && this.password != "admin12345") {
            this.router.navigate(['/loginErrorPassword'])
        }
        if(this.username == "" && this.password == "") {
            window.alert("Usuario y contraseña requeridos")
            this.router.navigate(['/login'])
        }
        if(this.username == "JorgePJ13" && this.password == "") {
            window.alert("Contraseña requerida")
            this.router.navigate(['/login'])
        }
        if(this.username == "" && this.password == "admin12345") {
            window.alert("Usuario requerido")
            this.router.navigate(['/login'])
        }
    }
}