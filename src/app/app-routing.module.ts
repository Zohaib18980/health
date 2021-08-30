import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: "",
    component: QuoteComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: "404",
    component: Page404Component,
    //canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
