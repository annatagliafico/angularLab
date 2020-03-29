import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-prt-023',
    templateUrl: './prt.023.component.html',
    styleUrls: ['./prt.023.component.scss']
})
export class Prt023Component implements OnInit, OnDestroy {

    userActivated = false;
    private activateSub : Subscription;

    constructor(private userService: UserService) { }

    ngOnInit()
    {
        this.activateSub = this.userService.activatedEmitter.subscribe( didActivate => {
            this.userActivated = didActivate;
        });
    }

    ngOnDestroy() : void
    {
        this.activateSub.unsubscribe();
    }
}
