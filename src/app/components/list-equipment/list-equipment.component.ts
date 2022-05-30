import { Component, OnInit } from '@angular/core';
import { EletricalEquipament } from '../../../models/electricalEquipment.model';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  public eletricalEquipments: EletricalEquipament[] = JSON.parse(localStorage.getItem("eletricalEquipments") || "[]");
  public eletricalEquipmentForUpdate: EletricalEquipament | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  remove(eletricalEquipament: EletricalEquipament) {
    const indexEletricalEquipament = this.eletricalEquipments.indexOf(eletricalEquipament);
    if (indexEletricalEquipament !== -1) {
      this.eletricalEquipments.splice(indexEletricalEquipament, 1);
      const data = JSON.stringify(this.eletricalEquipments);
      localStorage.setItem("eletricalEquipments", data);
    }
  }
  update(eletricalEquipament: EletricalEquipament) {
    this.eletricalEquipmentForUpdate = eletricalEquipament;
  }
}
