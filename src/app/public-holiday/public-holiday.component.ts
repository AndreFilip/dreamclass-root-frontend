import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import { MatTableDataSource} from "@angular/material/table";
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from "@angular/cdk/collections";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {PublicHoliday} from '../interfaces/public-holiday';
import {PublicHolidayDialogComponent} from './public-holiday-dialog/public-holiday-dialog.component';
import {PUBLIC_HOLIDAY_DIALOG_COMPONENT_CONSTANTS} from "../constants/constants";
import {PublicHolidayService} from "./public-holiday.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-public-holiday',
  templateUrl: './public-holiday.component.html',
  styleUrls: ['./public-holiday.component.css']
})
export class PublicHolidayComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  width = PUBLIC_HOLIDAY_DIALOG_COMPONENT_CONSTANTS.WIDTH;
  title = 'DreamClass.io';
  dataSource: MatTableDataSource<PublicHoliday> = new MatTableDataSource<PublicHoliday>([]);
  selection: SelectionModel<PublicHoliday> = new SelectionModel<PublicHoliday>(true, []);
  columnsToDisplay = ['select', 'date', 'description', 'actions'];

  constructor(private dialog: MatDialog, private publicHolidayService: PublicHolidayService) { }

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  add() {
    const dialogRef: MatDialogRef<PublicHolidayDialogComponent, PublicHoliday> = this.dialog.open<PublicHolidayDialogComponent, PublicHoliday, PublicHoliday>(PublicHolidayDialogComponent, {
      width: this.width
    });
    (dialogRef.afterClosed() as Observable<PublicHoliday>).subscribe((result: PublicHoliday) => {
      if (result) {
        this.publicHolidayService.addOrEdit(result).subscribe(() => {
          this.load();
        }, error => {
          console.log(error)
        })
      }
    });


  }

  deleteSelected() {
    this.publicHolidayService.deleteAllById(this.selection.selected.map(el => el.id) as number[]).subscribe(() => {
      this.load();
    })
  }

  edit(element: PublicHoliday) {
    const dialogRef: MatDialogRef<PublicHolidayDialogComponent, PublicHoliday> = this.dialog.open<PublicHolidayDialogComponent, PublicHoliday, PublicHoliday>(PublicHolidayDialogComponent, {
      width: this.width,
      data: element
    });
    (dialogRef.afterClosed() as Observable<PublicHoliday>).subscribe((result: PublicHoliday) => {
      if (result) {
        this.publicHolidayService.addOrEdit(result).subscribe(() => {
          this.load();
        }, error => {
          console.log(error)
        })
      }
    });


  }

  delete(id: number) {
    this.publicHolidayService.delete(id).subscribe(() => {
      this.load();
    })
  }

  load() {
    this.publicHolidayService.getAll().subscribe((results: PublicHoliday[]) => {
      this.dataSource.data = results;
      this.selection.clear();
    })
  }

}
