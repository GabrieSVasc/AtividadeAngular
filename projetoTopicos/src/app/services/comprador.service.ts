import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Comprador } from '../Comprador';
import { environment } from 'src/environments/environment';
import { Response } from '../Response';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/compradores`;

  constructor(private http: HttpClient) { }

  getCompradores(): Observable<Response<Comprador[]>>{
    return this.http.get<Response<Comprador[]>>(this.apiUrl);
  }

  getComprador(id: number): Observable<Response<Comprador>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Comprador>>(url);
  }
  createComprador(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  removeComprador(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateComprador(id: number, formData: FormData): Observable<FormData> {
    const url =`${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
