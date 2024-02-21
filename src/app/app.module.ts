import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableroModule } from './tablero/tablero.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavSectionComponent } from './side-nav-section/side-nav-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
