import { EletricalEquipament } from "./electricalEquipment.model";

export class PowerPlant {
  constructor(
    public id: any,
    public code: String,
    public name: String,
    public available_energy: Number,
    public code_eletrical_area: String | Number
  ) {
  }
}
