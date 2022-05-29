import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EletricalArea } from '../../../models/eletricalArea.model';
import { PowerPlant } from '../../../models/powerPlant.model';

@Component({
  selector: 'app-update-power-plant',
  templateUrl: './update-power-plant.component.html',
  styleUrls: ['./update-power-plant.component.css']
})
export class UpdatePowerPlantComponent implements OnInit {
  public eletricalAreas: EletricalArea[] = [
    { id: 1, code: "0001", name: "teste2", available_energy: 10, power_plants: [] },
    { id: 2, code: "0002", name: "teste3", available_energy: 10, power_plants: [] },
    { id: 3, code: "0003", name: "teste4", available_energy: 10, power_plants: [] },
    { id: 4, code: "0004", name: "teste5", available_energy: 10, power_plants: [] },
  ];
  @Input() powerPlant: PowerPlant | undefined;
  @Output() finishUpdatePowerPlant = new EventEmitter();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required
      ])],
      available_energy: ['12', Validators.compose([
        Validators.required
      ])],
      code_eletrical_area: new FormControl('0001', Validators.required)
    });
  }
  saveInStorageUpdate(powerPlantNew: PowerPlant) {
    const powerPlants: PowerPlant[] = JSON.parse(localStorage.getItem("powerPlants") || "[]");
    const indexPowerPlant = powerPlants.findIndex((pPlant) => pPlant.code === powerPlantNew.code);
    if (indexPowerPlant !== -1) {
      powerPlants[indexPowerPlant] = powerPlantNew;
      const data = JSON.stringify(powerPlants);
      localStorage.setItem("powerPlants", data);
      document.location.reload();
    }
  }
  onSubmit() {
    console.log("Updanting");
    this.saveInStorageUpdate({ ...this.form.value, code: this.powerPlant?.code });
    setTimeout(() => this.endUpdated(), 250);
  }
  endUpdated() {
    this.finishUpdatePowerPlant.emit(true);
  }
  formatNumber(event: any) {
    this.form.controls.available_energy.setValue(parseFloat(this.form.value.available_energy.toFixed(2)));
  }
  enabledUpdate() {
    const valuesForm = this.form.value;
    const isChangedForm = valuesForm.name !== this.powerPlant?.name ||
      valuesForm.available_energy !== this.powerPlant?.available_energy ||
      valuesForm.code_eletrical_area !== this.powerPlant?.code_eletrical_area;
    return this.form.valid && isChangedForm;
  }
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.form.value.eletrical_areas = (event.target.value);
    }
  }
  ngOnInit(): void {
    this.form.controls.name.setValue(this.powerPlant?.name);
    this.form.controls.available_energy.setValue(this.powerPlant?.available_energy);
    this.form.controls.code_eletrical_area.setValue(this.powerPlant?.code_eletrical_area);

  }

}
