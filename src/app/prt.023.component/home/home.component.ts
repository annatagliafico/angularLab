import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private firstObsSubscription : Subscription;

  constructor() { }

  ngOnInit()
  {
/*       this.firstObsSubscription = interval(1000).subscribe(count => {
          console.log(count);
      }); */
      
    const customIntervalObservable = Observable.create(observer => {
    let count = 0;
    setInterval( () => {
        observer.next(count);
        //lanciamo un complete
        if (count == 5)
        {
            observer.complete();
        }
        //lanciamo un errore
        if (count > 3)
        {
            observer.error(new Error('Count is greater 3!'));
        }
        count++;
    }, 1000);
    });

/*     //con subscribe recuperiamo i dati, mentre il secondo argomento è la gestione dell'errore
    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
       // console.log('Round: ' + (data + 1)); */
    this.firstObsSubscription = customIntervalObservable.pipe(filter( data => {
        return data > 0;
        //filter filtra i dati
    }), map( (data : number) => {
        return 'Round: ' + (data + 1);
        //map trasforma i dati
    })).subscribe(data => {
       console.log(data);
    }, error => {
        console.log(error);
        alert(error.message);
    }, () => {
        console.log('Completed!');
    });
  }

  ngOnDestroy() : void
  {
    this.firstObsSubscription.unsubscribe();
  }

}
