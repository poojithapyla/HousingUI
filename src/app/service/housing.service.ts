import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperties } from '../interface/properties';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getProperties():Observable<IProperties[]>{
    return this.http.get<IProperties[]>('data/properties.json');
  }
}
