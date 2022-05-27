import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EletricalArea } from 'src/models/eletricalArea.model';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  public powerPlants: PowerPlant[] = [
    { id: 1, code: "0001", name: "teste2", available_energy: 10, id_eletrical_area: 0, eletricalEquip:[] },
    { id: 2, code: "0002", name: "teste3", available_energy: 20, id_eletrical_area: 0, eletricalEquip:[] },
    { id: 3, code: "0003", name: "teste4", available_energy: 30, id_eletrical_area: 0, eletricalEquip:[] },
    { id: 4, code: "0004", name: "teste5", available_energy: 40, id_eletrical_area: 0, eletricalEquip:[] },
  ];
  public eletricalAreas: EletricalArea[] = [];
  public form: FormGroup;

  private eletricalAreaId = 1;
  private powerPlantsArea: PowerPlant[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required
      ])]
    });
  }

  addPowerPlant(powerPlant: PowerPlant) {
    this.powerPlantsArea.push(powerPlant);
    console.log(this.powerPlantsArea)
  }

  save() {
    for(let powerPlant of this.powerPlantsArea) {
      powerPlant.id_eletrical_area = this.eletricalAreaId;
    }

    this.eletricalAreas.push({
      id: this.eletricalAreaId,
      code: '0001',
      name: 'Teste Area Eletrica',
      available_energy: 10,
      power_plants: this.powerPlantsArea
    });

    this.eletricalAreaId++;
  }

  ngOnInit(): void {
  }

}
