import { DaoUsuario } from "./DaoUsuario";

export class GestorUsuario {
    constructor() {

    }

    /**
	 * Este método valida si un usuario esta registrado en el sistema
	 * @param usuario a validar
	 * @return 0 en caso de que el usuario este validado, 1 en caso de
	 * que el usuario no exista y un 2 en caso de que el usuario y el 
	 * password sean incorectos.
	 */
    /*
    public validarUsuario(usuario : Usuario) : number {
        let du : DaoUsuario = new DaoUsuario()
        let user : Usuario = du.busquedaPorNombre(usuario.)

        if(user == null) {
            return 1
        } 

        if(user.password.equals(usuario.password)) {
            return 0
        } else {
            return 2
        }   
    }*/
}