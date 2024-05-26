import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeeadeerComponent } from './heeadeer/heeadeer.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './heeadeer/top-menu/top-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeeadeerComponent,
         FooterComponent,
         TopHeaderComponent,
         TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
