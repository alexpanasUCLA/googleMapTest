import faker from "faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable {
    name: string;
    content: string;
    location: {
        lat: number,
        lng: number

    }

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.longitude())/2,
            lng: parseFloat(faker.address.latitude())/2
            
        },
        this.content = `${this.name} is here`;
    }
}