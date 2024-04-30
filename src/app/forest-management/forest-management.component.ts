import { Component, OnInit } from '@angular/core';
import { ForestManagementProducer } from 'app/admin/models/ForestManagement';
import { ForestManagementDTO } from 'app/admin/models/ForestManagementDTO';
import { ForestmanagmentService } from 'app/services/forestmanagment/forestmanagment.service';
import Swal from 'sweetalert2';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-forest-management',
  templateUrl: './forest-management.component.html',
  styleUrls: ['./forest-management.component.css']
})
export class ForestManagementComponent implements OnInit {
  forestManagementProducer = new ForestManagementProducer()
  constructor(
    private forestService : ForestmanagmentService
  ) { }

 



  withoutResult1: any

  withResult1: any



  ngOnInit(): void {
    Chart.register(...registerables);
    
  }

  calcul(){
    if(this.forestManagementProducer.startForestDegradationLevel == this.forestManagementProducer.withoutForestDegradationLevel){
      this.withoutResult1 = 0
    }
    if(this.forestManagementProducer.startForestDegradationLevel < this.forestManagementProducer.withoutForestDegradationLevel){
      if(this.forestManagementProducer.withoutForestDegradationLevel == 1){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * 19.66
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 2){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * 39
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 3){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * 78
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 4){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * 117
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 5){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * 156
      }
    }
    if(this.forestManagementProducer.startForestDegradationLevel > this.forestManagementProducer.withoutForestDegradationLevel){
      if(this.forestManagementProducer.withoutForestDegradationLevel == 1){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * -19.66
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 2){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * -39
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 3){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * -78
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 4){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * -117
      }
      if(this.forestManagementProducer.withoutForestDegradationLevel == 5){
        this.withoutResult1 = this.forestManagementProducer.startForestedAreaManagement * -156
      }
    }

    if(this.forestManagementProducer.startForestDegradationLevel == this.forestManagementProducer.withForestDegradationLevel){
      this.withResult1 = 0
    }
    if(this.forestManagementProducer.startForestDegradationLevel < this.forestManagementProducer.withForestDegradationLevel){
      if(this.forestManagementProducer.withForestDegradationLevel == 1){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * 19.66
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 2){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * 39
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 3){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * 78
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 4){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * 117
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 5){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * 156
      }
    }
    if(this.forestManagementProducer.startForestDegradationLevel > this.forestManagementProducer.withForestDegradationLevel){
      if(this.forestManagementProducer.withForestDegradationLevel == 1){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * -19.66
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 2){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * -39
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 3){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * -78
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 4){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * -117
      }
      if(this.forestManagementProducer.withForestDegradationLevel == 5){
        this.withResult1 = this.forestManagementProducer.startForestedAreaManagement * -156
      }
    }
    const data = {
      labels: [
        'with ',
        'without eission',
        'balance '
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [this.withResult1, this.withoutResult1, this.withResult1-this.withoutResult1],
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
  forestManagementDTO = new ForestManagementDTO()
  save(){
   
    this.forestManagementDTO.forestManagement = this.forestManagementProducer
    this.forestManagementDTO.eventType = ""
    console.log(this.forestManagementDTO)
    this.forestService.createForestmanagment(this.forestManagementDTO).subscribe(res=>{
      console.log(res)
      Swal.fire({
        title: "Succès !",
        text: "Votre données a été ajouté avec succès.",
        icon: "success"
      })
    })
   
  }

  // getchart() {
  //   const data = {
  //     labels: [
  //       'Red',
  //       'Blue',
  //       'Yellow'
  //     ],
  //     datasets: [{
  //       label: 'My First Dataset',
  //       data: [300, 50, 100],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(54, 162, 235)',
  //         'rgb(255, 205, 86)'
  //       ],
  //       hoverOffset: 4
  //     }]
  //   };

  //   new Chart("myChartTwo", {
  //     type: 'doughnut',
  //     data: data,
  //   });
  // }

}
