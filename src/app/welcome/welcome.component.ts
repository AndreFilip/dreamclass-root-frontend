import { Component, OnInit } from '@angular/core';
import {WelcomeService} from "./welcome.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  hello$: Observable<string> | undefined;

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.hello$ = this.welcomeService.getHello();
  }

}
