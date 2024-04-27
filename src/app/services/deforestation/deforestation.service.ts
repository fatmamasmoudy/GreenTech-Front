import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeforestationService {

  constructor(private httpclt:HttpClient) { }

  createDeforestation(data: any)
  {
    return this.httpclt.post("http://localhost:8002/Create_Deforestation", data);
  }
}
