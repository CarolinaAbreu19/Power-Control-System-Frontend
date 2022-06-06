import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EletricalArea } from 'src/models/eletricalArea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EletricalAreaService {

  baseUrl = "https://localhost:7187/AreaEletrica"

  constructor(public http: HttpClient) { }

  getAll(): Observable<EletricalArea[]> {
    return this.http.get<EletricalArea[]>(this.baseUrl);
  }
}
