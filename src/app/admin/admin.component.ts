import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hello$: Observable<string> | undefined;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.hello$ = this.adminService.getHello();
  }

}
