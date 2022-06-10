import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-list-power-plant',
  templateUrl: './list-power-plant.component.html',
  styleUrls: ['./list-power-plant.component.css']
})
export class ListPowerPlantComponent implements OnInit {
  public powerPlants: PowerPlant[] = [
    {id: 1, code: "0001", name: "teste 01", available_energy: 10, code_eletrical_area: "0002"},
    {id: 2, code: "0002", name: "teste 02", available_energy: 10, code_eletrical_area: "0002"},
    {id: 3, code: "0003", name: "teste 03", available_energy: 10, code_eletrical_area: "0002"},
    {id: 4, code: "0004", name: "teste 04", available_energy: 10, code_eletrical_area: "0002"},
  ]
  public powerPlantForUpdate: PowerPlant | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  remove(powerPlant: PowerPlant){
    const indexPowerPlant  = this.powerPlants.indexOf(powerPlant);
     if(indexPowerPlant !== -1){
        this.powerPlants.splice(indexPowerPlant, 1);
        const data = JSON.stringify(this.powerPlants);
        localStorage.setItem("powerPlants", data);
     }
  }
  update(powerPlant: PowerPlant) {
    this.powerPlantForUpdate = powerPlant;
  }

}
