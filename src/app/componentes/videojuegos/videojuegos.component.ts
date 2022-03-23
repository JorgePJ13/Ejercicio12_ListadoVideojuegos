import { Component, OnInit } from "@angular/core";
import { Videojuego } from "src/app/entidades/videojuego";

@Component({
    selector: 'app-videojuegos',
    templateUrl: './videojuegos.component.html',
    styleUrls: ['./videojuegos.component.css']
})

export class VideojuegosComponent implements OnInit {

    ngOnInit() {}

    arrayVideojuegos: Videojuego[] = []; 
    videojuego: Videojuego | null = null;

    constructor() {
        let videojuego : Videojuego = new Videojuego(1, "The Last Of Us", "./assets/TLOU.jpg", "Naughty Dog", 10);
        this.arrayVideojuegos.push(videojuego);
        videojuego = new Videojuego(2, "Red Dead Redemption", "./assets/RDR.jpg", "Rockstar Games", 9.9);
        this.arrayVideojuegos.push(videojuego);
        videojuego = new Videojuego(3, "Elden Ring", "./assets/ER.jpg", "From Software", 9.7)
        this.arrayVideojuegos.push(videojuego)
    }
}