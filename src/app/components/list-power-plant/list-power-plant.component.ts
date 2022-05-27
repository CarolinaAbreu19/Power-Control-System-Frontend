import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-list-power-plant',
  templateUrl: './list-power-plant.component.html',
  styleUrls: ['./list-power-plant.component.css']
})
export class ListPowerPlantComponent implements OnInit {
  public powerPlants: PowerPlant[] =  JSON.parse(localStorage.getItem("powerPlants") || "[]");
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  remove(powerPlant: PowerPlant){
    const indexPowerPlant  = this.powerPlants.indexOf(powerPlant);
     if(indexPowerPlant !== -1){
        this.powerPlants.splice(indexPowerPlant, 1);
        const data = JSON.stringify(this.powerPlants);
        localStorage.setItem("powerPlants", data);
     }
  }
  update(){

  }

}
