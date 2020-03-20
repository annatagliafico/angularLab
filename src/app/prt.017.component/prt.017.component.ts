import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-prt-017',
    templateUrl: './prt.017.component.html'
})
export class Prt017Component implements OnInit
{
    @Input() inputData: any;
    @Output() childEmitter = new EventEmitter<any>();

    attr01 : string = 'test text of attr01';
    attr02 : string = 'test text of attr02';
    attr03 : string = 'test text of attr03';
    attr04 : string = 'test text of attr04';

    constructor()
    {
        //this.childEmitter = new EventEmitter<any>();
    }

    ngOnInit()
    {
        this.attr01 = this.inputData.attr01;
        this.attr02 = this.inputData.attr02;
        this.attr03 = this.inputData.attr03;
        this.attr04 = this.inputData.attr04;
    }

    sendMessageToParent()
    {
        let tmpObj = { 
            "attr01" : this.attr01,
            "attr02" : this.attr02,
            "attr03" : this.attr03,
            "attr04" : this.attr04
         };
        this.childEmitter.emit(tmpObj);
        // this.childEmitter.emit(this.attr01);
    }
}



