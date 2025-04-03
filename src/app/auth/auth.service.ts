import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Adjust this if needed

  constructor(private http: HttpClient) {}

  // Login function
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Register function
  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Logout function
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  // Token refresh function
  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh`, {});
  }

  // Save token to local storage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Retrieve token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove token from local storage
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
