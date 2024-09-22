import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/rest';



@Injectable({
    providedIn: 'root',
  })
export class AuthService { // Cambia la URL según tu servicio
  
    constructor(private http: HttpClient) {}
  
    login(credentials: any): Observable<any> {
        return this.http.post<any>(API_URL+"user/V1/api/login",credentials);
    }
}