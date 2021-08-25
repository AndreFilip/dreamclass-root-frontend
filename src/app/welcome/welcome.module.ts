import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {WelcomeService} from "./welcome.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HttpClientModule
  ],
  providers: [WelcomeService]
})
export class WelcomeModule { }
