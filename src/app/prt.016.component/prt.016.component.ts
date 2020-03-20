import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-prt-016',
    templateUrl: './prt.016.component.html'
})
export class Prt016Component implements OnInit
{
    @Input() inputData: any;

    @Output() firstParentEmitter = new EventEmitter<any>();
    tmpParentEmitterContent : string = '--------------------';

    constructor()
    {
        // console.error(this.messageToSendP);
    }

    ngOnInit()
    {
    }

    manageEmitter(eventPayload : any)
    {
        this.tmpParentEmitterContent = eventPayload.attr01;
        this.sendMessageToParent( eventPayload );
    }

    sendMessageToParent(eventPayload : any)
    {
        this.firstParentEmitter.emit(eventPayload);
    }
}