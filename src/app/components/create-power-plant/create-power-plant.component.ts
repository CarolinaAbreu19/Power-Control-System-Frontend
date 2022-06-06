import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EletricalEquipament } from 'src/models/electricalEquipment.model';
import { EletricalArea } from 'src/models/eletricalArea.model';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-create-power-plant',
  templateUrl: './create-power-plant.component.html',
  styleUrls: ['./create-power-plant.component.css']
})
export class CreatePowerPlantComponent implements OnInit {

  public eletricalAreas: EletricalArea[] = [
    { id: 1, code: "0001", name: "teste2", available_energy: 10 },
    { id: 2, code: "0002", name: "teste3", available_energy: 10 },
    { id: 3, code: "0003", name: "teste4", available_energy: 10 },
    { id: 4, code: "0004", name: "teste5", available_energy: 10 },
  ];
  public powerPlant: PowerPlant[] = [];
  public form: FormGroup;

  private powerPlantId = 1;
  private eletricalEquipamentPowerPlant: EletricalEquipament[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required
      ])],
      code: ['', Validators.compose([
        Validators.maxLength(20),
        Validators.required
      ])],
      available_energy: ['', Validators.compose([
        Validators.required
      ])],
      code_eletrical_area: new FormControl('', Validators.required)

    });
    this.getPowerPlants();
  }
  onSubmit(){
    const newPowerPlant:PowerPlant = this.form.value
    this.powerPlant.push(newPowerPlant);
    const data = JSON.stringify(this.powerPlant);
    localStorage.setItem("powerPlants", data);
    this.clear();
  }
  formatNumber(event: any) {
    this.form.controls.available_energy.setValue(parseFloat(this.form.value.available_energy.toFixed(2)));
  }
  clear() {
    this.form.reset();
  }
  onCheckboxChange(event: any) {
    if(event.target.checked) {
      this.form.value.eletrical_areas = (event.target.value);
    }
  }
  getPowerPlants(){
    const data: string = localStorage.getItem("powerPlants") || "[]";
    this.powerPlant = JSON.parse(data);
  }


  ngOnInit(): void {
  }

}
