import { EletricalEquipament } from "./electricalEquipment.model";

export class PowerPlant {
    constructor(
        public id: Number,
        public code: String,
        public name: String,
        public available_energy: Number,
        public id_eletrical_area: Number,
        public eletricalEquip:EletricalEquipament[],
    ) {
    }
}