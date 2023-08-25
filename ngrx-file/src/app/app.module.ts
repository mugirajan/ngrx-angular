import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { counterReducer } from './counter/counter.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Number1Component } from './number1/number1.component';
import { Number2Component } from './number2/number2.component';
import { Number3Component } from './number3/number3.component';
import { Number4Component } from './number4/number4.component';
import { Number5Component } from './number5/number5.component';

const routes: Routes = [
  { path: '', redirectTo: '/number1', pathMatch: 'full' },
  { path: 'number1', component: Number1Component },
  { path: 'number2', component: Number2Component },
  { path: 'number3', component: Number3Component },
  { path: 'number4', component: Number4Component },
  { path: 'number5', component: Number5Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Number1Component,
    Number2Component,
    Number3Component,
    Number4Component,
    Number5Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
