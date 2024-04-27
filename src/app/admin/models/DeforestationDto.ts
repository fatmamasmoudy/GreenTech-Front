import { Deforestation } from "./Deforestation";

export class DeforestationDto {

    deforestationProducer: Deforestation;
    eventType: String;
    constructor() {
        this.deforestationProducer = new Deforestation();
    }


}