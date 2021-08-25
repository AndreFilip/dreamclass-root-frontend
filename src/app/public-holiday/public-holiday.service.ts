import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PublicHoliday} from "../interfaces/public-holiday";

@Injectable()
export class PublicHolidayService {

  private readonly url = "http://localhost:8080/publicHolidays/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<PublicHoliday[]> {
    return this.http.get<PublicHoliday[]>(this.url);
  }

  addOrEdit(publicHoliday: PublicHoliday) {
    return this.http.put(this.url, publicHoliday);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  deleteAllById(ids: number[]) {
    return this.http.post(this.url + "deleteAllById", ids);
  }
}
