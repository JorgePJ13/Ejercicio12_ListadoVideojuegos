import { Usuario } from "./Usuario"

export class DaoUsuario {
    listaUsuarios : Usuario[] = []

    constructor() {
        let usuario : Usuario = new Usuario("JorgePJ13", "12345")
        this.listaUsuarios.push(usuario)
        usuario = new Usuario("FelixDePablo", "54321")
        this.listaUsuarios.push(usuario)
    }

    /*
    public busquedaPorNombre(nombre : string) : Usuario {
        this.listaUsuarios.forEach(element => {
            let user : Usuario
            if(nombre == user.nombre) {
                return user
            }
        
        return null
    }*/
}


