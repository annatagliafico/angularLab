import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name : 'hello'})

export class HelloPipe implements PipeTransform
{
    transform(name : number, args : [string]) : string 
    {
        return `Hello ${name} ${args[0]}`;
    }
}