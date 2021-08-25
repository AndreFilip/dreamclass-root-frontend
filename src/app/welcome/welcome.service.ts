import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WelcomeService {

  private readonly url = "http://localhost:8080/welcome";

  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get(this.url, {responseType: 'text'});
  }
}
