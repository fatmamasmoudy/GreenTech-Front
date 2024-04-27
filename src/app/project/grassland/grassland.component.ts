

import { Component, OnInit } from '@angular/core';
import { Grassland } from 'app/admin/models/Grassland';
import { GrasslandDto } from 'app/admin/models/GrasslandDto';
import { GrasslandService } from 'app/services/grass-land/grassland.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grassland',
  templateUrl: './grassland.component.html',
  styleUrls: ['./grassland.component.css']
})
export class GrasslandComponent implements OnInit {

  constructor(
    private graslandService : GrasslandService
  ) { }
  grassland : Grassland = new Grassland()
  grasslandDto : GrasslandDto = new GrasslandDto()
  selectOption:any

  start1 : any
  without1 : any
  with1 : any
  start2 : any
  without2 : any
  with2 : any
  start3 : any
  without3 : any
  with3 : any
  withoutResult1 : any
  withoutResult2 : any
  withoutResult3 : any
  withResult1:any
  withResult2:any
  withResult3:any
  ngOnInit(): void {
    
  }


  generateRandomDecimal(min: number, max: number, decimalPlaces: number): number {
    const rand = Math.random() * (max - min) + min;
    return parseFloat(rand.toFixed(decimalPlaces));
  }

  calcul(){
    this.withoutResult1 = (this.start1-this.without1) * this.generateRandomDecimal(36,150,2)
    this.withResult1 = (this.start1-this.with1) * this.generateRandomDecimal(36,150,2)
  }


  save(){
    this.grasslandDto.eventType = ""
    this.grasslandDto.grassland = this.grassland
    this.grasslandDto.grassland.totGrasslandSystemWith =  this.withResult1
    this.grasslandDto.grassland.totGrasslandSystemWithout = this.withoutResult1
    this.grasslandDto.grassland.totGrasslandSystemBalance = this.withoutResult1 - this.withResult1
    console.log(this.grasslandDto)
    this.graslandService.createGrassland(this.grasslandDto).subscribe(res=>{
      Swal.fire({
        title: "Succès !",
        text: "Votre cours a été ajouté avec succès.",
        icon: "success"
      })
    })
  }
}
