import { Component, OnInit } from '@angular/core';
import { EletricalEquipament } from '../../../models/electricalEquipment.model';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  public eletricalEquipaments: EletricalEquipament[] = JSON.parse(localStorage.getItem("eletricalEquipaments") || "[]");
  public eletricalEquipamentForUpdate: EletricalEquipament | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  remove(eletricalEquipament: EletricalEquipament) {
    const indexEletricalEquipament = this.eletricalEquipaments.indexOf(eletricalEquipament);
    if (indexEletricalEquipament !== -1) {
      this.eletricalEquipaments.splice(indexEletricalEquipament, 1);
      const data = JSON.stringify(this.eletricalEquipaments);
      localStorage.setItem("eletricalEquipaments", data);
    }
  }
  update(eletricalEquipament: EletricalEquipament) {
    this.eletricalEquipamentForUpdate = eletricalEquipament;
  }
}
