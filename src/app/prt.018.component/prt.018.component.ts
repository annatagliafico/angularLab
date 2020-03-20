import { Component, Input} from '@angular/core';
import { Persona } from './persona';

@Component({
    selector: 'app-prt-018',
    templateUrl: './prt.018.component.html'
})
export class Prt018Component
{	
    firstPerson : Persona;
    secondPerson : Persona[] = [];
    
    ngOnInit(){
        this.firstPerson = new Persona("firstNome", "firstCognome", 30);
        this.secondPerson.push(new Persona("secondName", "secondSurname", 31));
        this.secondPerson.push(new Persona("NameTwo", "SurnameTwo", 32));

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