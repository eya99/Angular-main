
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rayon } from 'src/Model/rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  constructor(private httpClient: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/rayon/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  deleteRayon(id: bigint): Observable<bigint> {
    const url = this.url + 'remove-rayon/' + id;
    return this.httpClient.delete<bigint>(url);
  }

  getAllRayons(): Observable<Rayon[]> {
    return this.httpClient.get<Rayon[]>(this.url + 'retrieve-all-rayons');
  }

  getRayonById(id: number): Observable<Rayon> {
    return this.httpClient.get<Rayon>(this.url + 'retrieve-rayon/' + id);
  }

  addRayon(rayon: Rayon): Observable<Rayon> {
    return this.httpClient.post<Rayon>(this.url + 'add-rayon', rayon, this.httpOptions);
  }
  updateRayon(rayon: Rayon): Observable<Rayon> {
    return this.httpClient.put<Rayon>(
      this.url + 'modify-rayon',
      rayon,
      this.httpOptions
    );
  }
}
