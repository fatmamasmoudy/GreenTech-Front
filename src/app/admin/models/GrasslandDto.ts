import { Grassland } from "./Grassland";

export class GrasslandDto{
    grassland: Grassland;
    eventType: String;
    constructor() {
        this.grassland = new Grassland();
    }

}