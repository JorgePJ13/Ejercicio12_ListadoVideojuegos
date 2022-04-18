import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector : 'app-menu',
    templateUrl : './menu.component.html',
    styleUrls : ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    id : number = 0;
    titulo : string = ""
    imagen : string = ""
    compania : string = ""
    valoracion : number = 0;
    usuario: string =""
    password : string = ""
    static username_Static: string ="";
    static password_Static: string = ""

    constructor(private router:Router, route:ActivatedRoute) {
        this.usuario = route.snapshot.params["username"]
        this.password = route.snapshot.params["password"]
        //Actualizamos atributos estáticos
        MenuComponent.username_Static = this.usuario;
        MenuComponent.password_Static = this.password;
    }

    public routingProgramatico() {
        this.router.navigate([ '/videojuegos', this.id, this.titulo, this.compania, this.valoracion, this.imagen])
        
    }

    ngOnInit(): void {
        
    }
}