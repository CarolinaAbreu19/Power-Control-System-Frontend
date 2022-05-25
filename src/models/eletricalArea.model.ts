import { PowerPlant } from "./powerPlant.model";

export class EletricalArea {
    /**
     *
     */
    constructor(
        public id: Number,
        public code: String,
        public name: String,
        public available_energy: Number,
        public power_plants: PowerPlant[]
    ) {}
}