import { Component, OnInit } from '@angular/core';
import { DeforestationDto } from '../models/DeforestationDto';
import { DeforestationService } from 'app/services/deforestation/deforestation.service';
import Swal from 'sweetalert2';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-land-use-changes-admin',
  templateUrl: './land-use-changes.component.html',
  styleUrls: ['./land-use-changes.component.css']
})
export class LandUseChangesComponentAdmin implements OnInit {
  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getchart()
  }
  getchart() {
   
  }
  deforestationDto = new DeforestationDto()
  selectedVegetation: any
  start: any
  without: any
  with: any

  withoutResult: any
  withResult: any
  withoutResultTotal: any
  withResultTotal: any



  randomNumber: number;
  climate: any
  land:any
  constructor(
    private deforestationService : DeforestationService
  ) { }

  ngOnInit(): void {
  }
  generateRandomDecimal(min: number, max: number, decimalPlaces: number): number {
    const rand = Math.random() * (max - min) + min;
    return parseFloat(rand.toFixed(decimalPlaces));
  }

  calcul() {
    console.log("hh")
    this.withoutResult = this.start - this.without
    this.withResult = this.start - this.with
    this.withoutResultTotal = this.withoutResult * this.generateRandomDecimal(36, 150, 2)
    this.withResultTotal = this.withResult * this.generateRandomDecimal(36, 150, 2)

    const data = {
      labels: [
        'with emission',
        'without emission',
        'balance '
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [this.withResultTotal, this.withoutResultTotal, this.withResultTotal-this.withoutResultTotal],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
   
    new Chart("myChartTwoo", {
      type: 'doughnut',
      data: data,
    });
 
  }

  save(){
    this.deforestationDto.deforestationProducer.vegetationUsed = this.selectedVegetation
    this.deforestationDto.deforestationProducer.startForestedArea1 = this.start
    this.deforestationDto.deforestationProducer.withForestedArea1 = this.with
    this.deforestationDto.deforestationProducer.withoutForestedArea1 = this.without
    this.deforestationDto.deforestationProducer.withDeforestedArea1 = this.withResult
    this.deforestationDto.deforestationProducer.withoutDeforestedArea1 = this.withoutResult
    this.deforestationDto.deforestationProducer.withTotDeforestation = this.withResultTotal
    this.deforestationDto.deforestationProducer.withoutTotDeforestation = this.withoutResultTotal
    this.deforestationDto.deforestationProducer.withTotEmissions1 = this.withoutResultTotal
    this.deforestationDto.deforestationProducer.withoutTotEmissions1 = this.withoutResultTotal
    this.deforestationDto.deforestationProducer.balance1 = this.withoutResultTotal - this.withResultTotal
    this.deforestationDto.eventType = "create"
    console.log("fffffff",this.deforestationDto)
    this.deforestationService.createDeforestation(this.deforestationDto).subscribe(res=>{
      Swal.fire({
        title: "Succès !",
        text: "Votre cours a été ajouté avec succès.",
        icon: "success"
      })
    })


  }

}
