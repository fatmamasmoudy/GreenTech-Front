import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrasslandService {

  constructor(private httpclt:HttpClient) { }

  createGrassland(data: any)
  {
    return this.httpclt.post("http://localhost:8002/Create_Grassland", data);
  }
}
