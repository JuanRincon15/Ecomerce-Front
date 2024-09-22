import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from './login.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    credentials = {
        correo: '',
        clave: ''
    };



    constructor(public authService: AuthService,private router: Router,public layoutService: LayoutService) { }

    onSubmit(){
        console.log("hola")
        this.authService.login(this.credentials).subscribe(
            Response =>{
                console.log(Response.message);
                if (Response.status == false){
                    console.log('credenciales incorrectas')
                }else {
                    this.router.navigate(['/inicio']);
                }

            },
            error =>{
                console.log("error de autenticacion");
            }
        );
    }

    
}
