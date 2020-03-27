import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-prt-023',
    templateUrl: './prt.023.component.html',
    styleUrls: ['./prt.023.component.scss']
})
export class Prt023Component implements OnInit {

    userActivated = false;

    constructor(private userService: UserService) { }

    ngOnInit()
    {
        this.userService.activatedEmitter.subscribe( didActivate => {
            this.userActivated = didActivate;
        });
    }
}
