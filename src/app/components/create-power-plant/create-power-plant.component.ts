import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EletricalEquipament } from 'src/models/electricalEquipment.model';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-create-power-plant',
  templateUrl: './create-power-plant.component.html',
  styleUrls: ['./create-power-plant.component.css']
})
export class CreatePowerPlantComponent implements OnInit {

  public eletricalEquipaments: EletricalEquipament[] = [
    { id: 1, code: "0001", name: "teste2", type: 1, id_power_plant: 0 },
    { id: 2, code: "0002", name: "teste3", type: 2, id_power_plant: 0 },
    { id: 3, code: "0003", name: "teste4", type: 3, id_power_plant: 0 },
    { id: 4, code: "0004", name: "teste5", type: 1, id_power_plant: 0 },
  ];
  public powerPlant: PowerPlant[] = [];
  public form: FormGroup;

  private powerPlantId = 1;
  private eletricalEquipamentPowerPlant: EletricalEquipament[] = [];

  constructor(private fb: FormBuilder) {
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
      id_eletrical_area: ['', Validators.compose([
        Validators.required
      ])],

    });
  }

  addEEletricalEquipament(eletricalEquipament: EletricalEquipament) {
    this.eletricalEquipamentPowerPlant.push(eletricalEquipament);
    console.log(this.eletricalEquipamentPowerPlant)
  }

  save() {
    for(let eletricalEquipament of this.eletricalEquipamentPowerPlant) {
      eletricalEquipament.id_power_plant = this.powerPlantId;
    }

    this.powerPlant.push({
      id: this.powerPlantId,
      code: '0001',
      name: 'Teste Usina',
      available_energy: 10,
      id_eletrical_area: 1,
      eletricalEquip: this.eletricalEquipamentPowerPlant
    });

    this.powerPlantId++;
  }

  ngOnInit(): void {
  }

}
