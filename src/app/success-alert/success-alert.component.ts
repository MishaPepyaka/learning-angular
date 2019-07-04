import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<h3>Success!</h3>\n',
  styles: [`
  h3 {
    padding: 20px;
    background-color: palegreen;
    border: 1px solid green;
    color: green;
  } 
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
