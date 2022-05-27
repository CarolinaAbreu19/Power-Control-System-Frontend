import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EletricalArea } from 'src/models/eletricalArea.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  // public powerPlants: PowerPlant[] = [
  //   { id: 1, code: "0001", name: "teste2", available_energy: 10, code_eletrical_area: 0, eletricalEquip:[] },
  //   { id: 2, code: "0002", name: "teste3", available_energy: 20, code_eletrical_area: 0, eletricalEquip:[] },
  //   { id: 3, code: "0003", name: "teste4", available_energy: 30, code_eletrical_area: 0, eletricalEquip:[] },
  //   { id: 4, code: "0004", name: "teste5", available_energy: 40, code_eletrical_area: 0, eletricalEquip:[] },
  // ];
  public eletricalAreas: EletricalArea[] = [];
  public form: FormGroup;

  private eletricalAreaId = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      id: this.eletricalAreaId,
      code: this.generateCode(),
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required
      ]),],
      available_energy: 0
    });
  }
  
  // onCheckboxChange(event: any) {
  //   const selectedPowerPlants = (this.form.controls.power_plants as FormArray);
  //   if(event.target.checked) {
  //     selectedPowerPlants.push(new FormControl(event.target.value));
  //   } else {
  //     const index = selectedPowerPlants.controls.findIndex(powerPlant => powerPlant.value === event.target.value);
  //     selectedPowerPlants.removeAt(index);
  //   }
  // }

  // Somente testes
  generateCode() {
    let code = '';
    const keys = 'abcdefghijklmnopqrstuvwxyz1234567890';

    for(let i = 0; i < 20; i++) {
      code += keys.charAt(Math.floor(Math.random() * keys.length));
    }
  }

  submit() {
    // Validar nome da área elétrica

    const body = this.form.value;
    console.log(body);

    // Fazer requisição ao banco de dados passando o body

    this.router.navigate(['/list-areas']);
  }

  ngOnInit(): void {
  }

}
