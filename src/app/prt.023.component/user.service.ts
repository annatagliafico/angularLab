import { Injectable, EventEmitter } from '@angular/core';

// creiamo qui il provider invece di aggiungerlo ai providers di app.module
@Injectable({providedIn: 'root'})
export class UserService {
    activatedEmitter = new EventEmitter<boolean>();
}