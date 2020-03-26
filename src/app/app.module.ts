import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Prt001Component } from './prt.001.component/prt.001.component';
import { Prt002Component } from './prt.002.component/prt.002.component';
import { Prt003Component } from './prt.003.component/prt.003.component';
import { Prt004Component } from './prt.004.component/prt.004.component';
import { Prt005Component } from './prt.005.component/prt.005.component';
import { Prt006Component } from './prt.006.component/prt.006.component';
import { Prt007Component } from './prt.007.component/prt.007.component';
import { Prt008Component } from './prt.008.component/prt.008.component';
import { Prt009Component } from './prt.009.component/prt.009.component';
import { Prt010Component } from './prt.010.component/prt.010.component';
import { Prt011Component } from './prt.011.component/prt.011.component';
// import { Prt012IndexComponent } from './prt.012.component/index/index.component';
import { Prt012HomeComponent } from './prt.012.component/home/home.component';
import { Prt012DetailComponent } from './prt.012.component/detail/detail.component';
import { Prt012ListComponent } from './prt.012.component/list/list.component';
import { Prt013Component } from './prt.013.component/prt.013.component';

import { ProductBeMockupService } from './product-be-mockup.service';
import { Prt015Component } from './prt.015.component/prt.015.component';
import { Prt016Component } from './prt.016.component/prt.016.component';
import { Prt017Component } from './prt.017.component/prt.017.component';
import { Prt018Component } from './prt.018.component/prt.018.component';
import { Prt019Component } from './prt.019.component/prt.019.component';
import { Prt020Component } from './prt.020.component/prt.020.component';
import { ChildPrt020Component } from './prt.020.component/childprt020.component/childprt020.component';
import { Prt021Component } from './prt.021.component/prt.021.component';
import { Prt022Component } from './prt.022.component/prt.022.component';
import { ChildPrt022Component } from './prt.022.component/childprt022.component/childprt022.component';
import { GranChildComponent } from './prt.022.component/granchild.component/granchild.component';

@NgModule({
  declarations: [
    AppComponent,
    Prt001Component,
    Prt002Component,
    Prt003Component,
    Prt004Component,
    Prt005Component,
    Prt006Component,
    Prt007Component,
    Prt008Component,
    Prt009Component,
    Prt010Component,
    Prt011Component,
    Prt012HomeComponent,
    Prt012DetailComponent,
    Prt012ListComponent,
    Prt013Component,

    Prt015Component,
    Prt016Component,
    Prt017Component,
    Prt018Component,
    Prt019Component,
    Prt020Component,
    ChildPrt020Component,
    Prt021Component,
    Prt022Component,
    ChildPrt022Component,
    GranChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ProductBeMockupService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
