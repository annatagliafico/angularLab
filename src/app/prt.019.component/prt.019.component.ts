import { Component} from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-prt-019',
    templateUrl: './prt.019.component.html'
})
export class Prt019Component 
{
    first: string;
    last: string;	
    persons : Person[];
    
    ngOnInit(){
        this.persons = [
            new Person(),
            new Person({name:"Joe"}),
            new Person({
                name:"Joe",
                address:"planet Earth"
            }),
            new Person({
                age:5,               
                address:"planet Earth",
                name:"Joe"
            }),
            new Person(new Person({name:"Joe"})) //shallow clone
        ]; 
        
        console.error(this.persons);
    }

}