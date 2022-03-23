export class Videojuego {

    constructor(public id: number, public titulo : string, public img : string, public compania? : string, public valoracion? : number) {
        this.id = id;
        this.titulo = titulo;
        this.compania = compania;
        this.img = img;
        this.valoracion = valoracion;
    }

    public toString() : string {
        return "ID: " + this.id + ", " + this.compania + ", " + this.img + ", " + this.valoracion;
    }
}