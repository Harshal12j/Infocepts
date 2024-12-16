import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:3000/api/customers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'; // Declare apiUrl property

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
