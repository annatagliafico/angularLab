import { Component} from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-prt-018',
    templateUrl: './prt.018.component.html'
})
export class Prt018Component
{	
    firstPerson : Person;
    secondPerson : Person[] = [];
    
    ngOnInit(){
        this.firstPerson = new Person("firstNome", "firstCognome", 30);
        this.secondPerson.push(new Person("secondName", "secondSurname", 31));
        this.secondPerson.push(new Person("NameTwo", "SurnameTwo", 32));

    }

    stampaPersona(){
        let nome = this.firstPerson.nome;
        let cognome = this.firstPerson.cognome;
        let eta = this.firstPerson.eta;

        return nome + ' ' + cognome + ' ' +eta;
    }

    firmaPersona(nome : string, cognome : string = "sanna") : void{

        let f: (x: number, y?: number) => void;

            f = function (x: number, y?: number): void { 
                console.error(`x= ${x}, y=${y}`);
            }
            
        f(3);

        console.error(`nome= ${nome}, cognome=${cognome}`);
    }

   
}