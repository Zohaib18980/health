import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuoteComponent } from './quote/quote.component';
import { FiltersComponent } from './quote/filters/filters.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { QuoteNoteComponent } from './quote/quote-note/quote-note.component';
import { PlansComponent } from './quote/quote-detail/plans/plans.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { NointernetComponent } from './nointernet/nointernet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    FiltersComponent,
    QuoteDetailComponent,
    QuoteNoteComponent,
    PlansComponent,
    FooterComponent,
    Page404Component,
    NointernetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, 
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
