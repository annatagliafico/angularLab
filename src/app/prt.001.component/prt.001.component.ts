import { Component } from '@angular/core';

@Component({
  selector: 'app-prt-001',
  templateUrl: './prt.001.component.html'
})
export class Prt001Component
{
    textForInterpolation   = '"attribute value (through interpolation)"';

    public getTextForInterpolation() //IMPORTANT: method is public
    {
        return '"text returned by a method (through interpolation)"';
    }

    textForPropertyBinding = '"attribute value (through property binding)"';

    getTextForPropertyBinding() //IMPORTANT: method don't need to be public
    {
        return '"text returned by a method (through property binding)"';
    }
}
