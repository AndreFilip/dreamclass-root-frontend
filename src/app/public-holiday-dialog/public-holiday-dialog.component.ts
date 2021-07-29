import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {PublicHoliday} from "../interfaces/public-holiday";

@Component({
  selector: 'app-public-holiday-dialog',
  templateUrl: './public-holiday-dialog.component.html',
  styleUrls: ['./public-holiday-dialog.component.css']
})
export class PublicHolidayDialogComponent implements OnInit {

  form!: FormGroup;
  action!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PublicHoliday,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    let theDate;
    this.action = "Add"
    if (this.data?.date) {
      theDate = formatDate(this.data.date, "yyyy-MM-dd", "en-US");
      this.action = "Edit";
    }
    this.form = this.fb.group({
      id: this.fb.control(this.data?.id),
      description: this.fb.control(this.data?.description,[Validators.required]),
      date: this.fb.control(this.data ? theDate : undefined, [Validators.required])
    });
  }

}
