import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicHolidayRoutingModule } from './public-holiday-routing.module';
import { PublicHolidayComponent } from './public-holiday.component';
import {PublicHolidayDialogComponent} from "./public-holiday-dialog/public-holiday-dialog.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PublicHolidayService} from "./public-holiday.service";


@NgModule({
  declarations: [
    PublicHolidayComponent,
    PublicHolidayDialogComponent
  ],
  imports: [
    CommonModule,
    PublicHolidayRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PublicHolidayService]
})
export class PublicHolidayModule { }
