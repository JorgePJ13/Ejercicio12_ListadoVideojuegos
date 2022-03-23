import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    username!: string;
    password!: string;
    router: any;

    constructor(){
    }
    
    public login() : void {
        if(this.username == "JorgePJ13" && this.password == "12345") {
            this.router.navigate(['/menu'])
        } 
        if(this.username == "FelixdePablo" && this.password == "12345") {
            this.router.navigate(['/menu'])
        }
        if(this.username == "JorgePJ13" && this.password != "12345") {
            this.router.navigate(['/loginError'])
        } 
        if(this.username == "FelixDePablo" && this.password != "12345"){
            this.router.navigate(['/loginError'])
        }
        if(this.username != "JorgePJ13") {
            this.router.navigate(['/loginError'])
        }
        if(this.username != "FelixDePablo") {
            this.router.navigate(['/loginError'])
        }
    }

    ngOnInit() {
        
    }
}