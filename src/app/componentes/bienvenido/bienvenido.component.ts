import { Component, OnInit, ResolvedReflectiveFactory } from "@angular/core";
import { Router } from "@angular/router";
import { Videojuego } from "src/app/entidades/videojuego";

@Component({
    selector : 'app-bienvenido',
    templateUrl : './bienvenido.component.html',
    styleUrls : ['./bienvenido.component.css']
})

export class BienvenidoComponent implements OnInit {

    videojuegos: Videojuego[] = []; 
    videojuego: Videojuego | null = null;

    id : number = 0;
    titulo : string = ""
    imagen : string = ""
    compania : string = ""
    valoracion : number = 0;

    constructor(private router:Router) {
        let v : Videojuego = new Videojuego(1, "The Last Of Us", "./assets/TLOU.jpg");
        this.videojuegos.push(v);
        v = new Videojuego(2, "Red Dead Redemption", "./assets/RDR.jpg");
        this.videojuegos.push(v);
        v = new Videojuego(3, "Elden Ring", "./assets/ER.jpg", "From Software", 9.7)
        this.videojuegos.push(v)
    }

    public routingProgramatico() {
        this.router.navigate([ '/videojuegos', this.id, this.titulo, this.compania, this.valoracion, this.imagen])
    }

    ngOnInit() {
        
    }
}