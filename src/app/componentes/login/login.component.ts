import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/entidades/Usuario";
import { LoginValidacionServicio } from "src/app/servicios/login-validacion.servicio";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    //USUARIOS BASE DE DATOS
    /**
        * JorgePJ13
        * jorge.pando98
    */

    // Atributo solo de lectura
    readonly endPoint = 'http://localhost:8080'
    mapUsuarioPassword: Map<string, string> = new Map<string, string>();
    users: Array<Usuario> = [];
    username : string = "";
    password : string = "";
    tituloLogin: string = 'Inicio de Sesión';

    errorMensaje: string = '';
    error: boolean = true;
    
    constructor(private router: Router, private _loginService: LoginValidacionServicio) {
        let usuarioNuevo = new Usuario('JorgePJ13', 'jorge.pando');
        this.mapUsuarioPassword.set(usuarioNuevo.getNombre(), usuarioNuevo.getPassword());
        this.users.push(usuarioNuevo);
        usuarioNuevo = new Usuario('FdePablo', 'felix.babel');
        this.mapUsuarioPassword.set(usuarioNuevo.getNombre(), usuarioNuevo.getPassword());
        this.users.push(usuarioNuevo);
        usuarioNuevo = new Usuario('ElNano14', 'fernando.alonso');
        this.mapUsuarioPassword.set(usuarioNuevo.getNombre(), usuarioNuevo.getPassword());
        this.users.push(usuarioNuevo);
    
        this._loginService = _loginService;
        //USUARIOS BASE DE DATOS
        /**
         * pedro
         * pswd11
         */
      }

    ngOnInit() {
        
    }

    LoginUser() {
        this._loginService.login(this.username, this.password).subscribe((respuesta) => {
          //'respuesta' objeto Json que contiene el body
  
          //si validado es true se navega al index de la aplicacion web con los datos del usuario logueado
          if (respuesta.validado) {
            this.router.navigate([
              '/menu',
              this.username,
              this.password
            ]);
          }
          //Si el correo o nombre de usuario no se corresponde con ninguno de los usuarios registrados
          else if (!this.mapUsuarioPassword.has(this.username)) {
            this.error = false;
            this.errorMensaje = 'El usuario no existe en nuestro sistema. Por favor, comprueba de nuevo que el nombre es correcto';
  
            setTimeout(() => {
              this.error = true;
            }, 2000);
          }
          //Si la contraseña no coincide con la existente para dicho usuario
          else {
            if (this.mapUsuarioPassword.get(this.username) != this.password) {
              this.error = false;
              this.errorMensaje = 'La contraseña es incorrecta. Por favor, introducela de nuevo';
  
              setTimeout(() => {
                this.error = true;
              }, 2000);
            }
          }
        });
    }
}