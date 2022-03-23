import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

    constructor(private router:Router) {

    }

    public routingProgramatico() {
        this.router.navigate([ '/videojuegos', this.id, this.titulo, this.compania, this.valoracion, this.imagen])
        
    }

    ngOnInit(): void {
        
    }
}