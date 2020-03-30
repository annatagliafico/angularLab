import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute, private userService : UserService, private router: Router) {
    }

    ngOnInit() 
    {
        this.route.params.subscribe((params: Params) => { /*params è un Observable, è un flusso di parametri di route
                                                        ci da un nuovo parametro ogni volta che cambiamo pagina*/
        this.id = +params.id;
        });
    }

    onActivate()
    {
        // this.userService.activatedEmitter.emit(true);
        this.userService.activatedEmitter.next(true);
    }

    onReloadPage()
    {
        this.router.navigate(['prt023/user', this.id]);
        console.error('ricaricato');
        console.error(this.id);
    }
    
}
