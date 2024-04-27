import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForestmanagmentService {

  constructor(private httpclt:HttpClient) { }

  createForestmanagment(data: any)
  {
    return this.httpclt.post("http://localhost:8002/Create_Forest_Management", data);
  }
}
