import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontEndInstructionComponent } from './front-end-instruction/front-end-instruction.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BackEndInstructionComponent } from './back-end-instruction/back-end-instruction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NeoSoFtComponent } from './neo-so-ft/neo-so-ft.component';
import { NeoSoFtFormComponent } from './neo-so-ft-form/neo-so-ft-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontEndInstructionComponent,
    NavBarComponent,
    BackEndInstructionComponent,
    NeoSoFtComponent,
    NeoSoFtFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
