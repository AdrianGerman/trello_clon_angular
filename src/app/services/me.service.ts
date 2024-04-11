import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/profile`, {
      context: checkToken(),
    });
  }
  getBoards() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/boards`, {
      context: checkToken(),
    });
  }
}
