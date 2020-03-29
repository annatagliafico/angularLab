import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// creiamo qui il provider invece di aggiungerlo ai providers di app.module
@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>();

}