import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prt-015',
    templateUrl: './prt.015.component.html'
})
export class Prt015Component implements OnInit
{
    inputData = { 
        "attr01" : '',
        "attr02" : '',
        "attr03" : '',
        "attr04" : ''
     };

    attr01 : string = '--------------------';
    attr02 : string = '--------------------';
    attr03 : string = '--------------------';
    attr04 : string = '--------------------';

    constructor() { }

    ngOnInit()
    {
    }

    manageEmitter(eventPayload : any)
    {

        this.attr01 = eventPayload.attr01;
        this.attr02 = eventPayload.attr02;
        this.attr03 = eventPayload.attr03;
        this.attr04 = eventPayload.attr04;

    }
}