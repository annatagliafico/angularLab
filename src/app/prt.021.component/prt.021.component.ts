import { Component} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-prt-021',
    templateUrl : './prt.021.component.html'
})
export class Prt021Component{

    comm: any;

    constructor()
    {
/*          let ob = new Observable( observer =>{ //new Observable : crea una sequenza di dati che determina lo stream
            let i=0;
            setInterval(() => 
            {
                observer.next(i++);
            }, 2000);
        });
        ob.subscribe((value) => { console.log(value)}); */

        this.comm = new Subject<string>();
        this.comm.subscribe(
            {
                next : (v) => console.log('dato: ' +v)
            }
        );
    }

    send()
    {
        this.comm.next('Hello');
    }

    
}