import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';
@Injectable({
  providedIn: 'root',
})
export class AlquilarService {
  url = '/api/alquileres/';
  constructor(private http: HttpClient) {}
  loadAlquileres(): Observable<any> {
    return this.http.get(this.url);
  }
  loadAlquiler(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  addAlquiler(alquiler: Alquiler): Observable<any> {
    return this.http.post(this.url, alquiler);
  }
  updateAlquiler(id: string, alquiler: Alquiler): Observable<any> {
    return this.http.put(this.url + id, alquiler);
  }
  deleteAlquiler(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
