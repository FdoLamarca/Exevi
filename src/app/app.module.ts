import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { CalculateIndexComponent } from './calculate-index/calculate-index.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CalculateIndexComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
