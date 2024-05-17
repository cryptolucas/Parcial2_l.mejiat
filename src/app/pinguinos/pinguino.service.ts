import { Injectable } from '@angular/core';
import { Pinguino } from './pinguino';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {

private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getPinguinos(): Observable<Pinguino[]> {
  return this.http.get<Pinguino[]>(this.apiUrl);
}

}
