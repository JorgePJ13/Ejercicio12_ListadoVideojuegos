export class Usuario {
    public id: number;
    public _nombre : string
    public _password : string;

    constructor(nombre : string, password : string, id?: number) {
        this.id = id ? id : 0;
        this._nombre = nombre;
        this._password = password
    }

    public getId(): number {
        return this.id;
      }

    public getNombre() : string {
        return this._nombre
    }

    public setNombre(nombre : string) {
        this._nombre = nombre
    }

    public getPassword() : string {
        return this._password
    }

    public setPassword(password : string) {
        this._password = password
    }
}