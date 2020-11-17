import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(data): Observable<any>{
    return this.http.post(`${baseURL}sessions`, data);
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  getJwtToken(): string {
    return localStorage.getItem('@Navigatron:token');
  }

  logout(): void {
    localStorage.removeItem('@Navigatron:user');
    localStorage.removeItem('@Navigatron:token');

    this.router.navigate(['/']);
  }
}
