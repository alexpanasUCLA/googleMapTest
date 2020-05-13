import faker from "faker";
import {Mappable} from "./CustomMap";

export class Company implements Mappable{
    name: string;
    content: string;
    location: {
        lat: number,
        lng: number;

    }

    constructor(){
        this.name = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.longitude())/2,
            lng: parseFloat(faker.address.latitude())/2
            
        }
        this.content = `<h2>${this.name}</h2>`
    }


}