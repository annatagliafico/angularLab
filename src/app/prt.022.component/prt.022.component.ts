import { Component, Injectable} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable() /*rendiamo la classe SharedService iniettabile nei componenti figli*/

export class SharedService /*servizio che mette in comunicazione i vari componenti*/
{
    parent = new Subject<string>();  /*crea più Subject separati*/
    child  = new Subject<string>();
}

@Component({
    selector  : 'app-prt-022', /*al click su button, viene inviato un dato nello stream child, sottoscritto
                                 dai due componenti figli ChildPrt022Component e GranChildComponent*/
    template  : `<button (click)="sendHello()">Click</button> 
                <app-childprt022></app-childprt022>
                <app-granchild></app-granchild>`,
    providers : [SharedService]
})
export class Prt022Component
{
    subscription : Subscription;

    constructor(private s : SharedService)
    {
        this.subscription = s.parent.subscribe(
            data =>{
                console.log('parent recvs: ', data);
            }
        );
    }

    sendHello(nome : string)
    {
        let aux = `Hello childrens!`;
        this.s.child.next(aux);
    }
}