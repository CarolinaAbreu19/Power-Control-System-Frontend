import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EletricalEquipament } from '../../../models/electricalEquipment.model';
import { PowerPlant } from '../../../models/powerPlant.model';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {
  public powerPlants: PowerPlant[] = [
    { id: 1, code: "0001", name: "teste2", available_energy: 30, code_eletrical_area: '0001', eletricalEquip: [] },
    { id: 2, code: "0002", name: "teste3", available_energy: 16, code_eletrical_area: '0001', eletricalEquip: [] },
    { id: 3, code: "0003", name: "teste4", available_energy: 13, code_eletrical_area: '0001', eletricalEquip: [] },
    { id: 4, code: "0004", name: "teste5", available_energy: 30, code_eletrical_area: '0001', eletricalEquip: [] },
  ];
  public eletricalEquipament: EletricalEquipament[] = [];
  public form: FormGroup;
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
      type: ['', Validators.compose([
        Validators.required
      ])],
      code_power_plant: new FormControl('', Validators.required)

    });
  }
  onSubmit() {
    console.log(this.form.value);
    const newEletricalEquipament: EletricalEquipament = this.form.value
    this.eletricalEquipament.push(newEletricalEquipament);
    const data = JSON.stringify(this.eletricalEquipament);
    localStorage.setItem("eletricalEquipaments", data);
    this.clear();
  }
  clear() {
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
