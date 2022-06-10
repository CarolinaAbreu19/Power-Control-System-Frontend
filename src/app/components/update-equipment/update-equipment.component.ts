import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EletricalEquipament } from '../../../models/electricalEquipment.model';
import { PowerPlant } from '../../../models/powerPlant.model';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {
  public powerPlants: PowerPlant[] = [
    { id: 1, code: "0001", name: "teste2", available_energy: 10, code_eletrical_area: 11 },
    { id: 2, code: "0002", name: "teste3", available_energy: 10, code_eletrical_area: 12 },
    { id: 3, code: "0003", name: "teste4", available_energy: 10, code_eletrical_area: 8 },
    { id: 4, code: "0004", name: "teste5", available_energy: 10, code_eletrical_area: 11 },
  ];
  @Input() eletricalEquipment: EletricalEquipament | undefined;
  @Output() finishUpdateEquipment = new EventEmitter();

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required
      ])],
      type: ['', Validators.compose([
        Validators.required
      ])],
      code_power_plant: new FormControl('', Validators.required)
    });
  }
  saveInStorageUpdate(equipamentNew: EletricalEquipament) {
    const equipments: EletricalEquipament[] = JSON.parse(localStorage.getItem("eletricalEquipments") || "[]");
    const indexEquipament = equipments.findIndex((eEquipment) => eEquipment.code === equipamentNew.code);
    console.log(equipments)
    if (indexEquipament !== -1) {
      equipments[indexEquipament] = equipamentNew;
      const data = JSON.stringify(equipments);
      localStorage.setItem("eletricalEquipments", data);
      document.location.reload();
    }
  }
  onSubmit() {
    console.log("Updanting");
    this.saveInStorageUpdate({ ...this.form.value, code: this.eletricalEquipment?.code });
    setTimeout(() => this.endUpdated(), 250);
  }
  endUpdated() {
    this.finishUpdateEquipment.emit(true);
  }
  enabledUpdate() {
    const valuesForm = this.form.value;
    const isChangedForm = valuesForm.name !== this.eletricalEquipment?.name ||
      valuesForm.type !== this.eletricalEquipment?.type ||
      valuesForm.code_power_plant !== this.eletricalEquipment?.code_power_plant;
    return this.form.valid && isChangedForm;
  }
  ngOnInit(): void {
    this.form.controls.name.setValue(this.eletricalEquipment?.name);
    this.form.controls.type.setValue(this.eletricalEquipment?.type);
    this.form.controls.code_power_plant.setValue(this.eletricalEquipment?.code_power_plant);
  }

}
