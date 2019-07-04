import {Component, OnInit} from '@angular/core';
import {userError} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-username-field',
  templateUrl: './username-field.component.html',
  styleUrls: ['./username-field.component.css']
})
export class UsernameFieldComponent implements OnInit {

  allowEntering = false;
  username = '';

  constructor() {

  }

  ngOnInit() {
  }

  onUpdateUsername(event: Event) {
    this.allowEntering = (<HTMLInputElement> event.target).value !== '';
  }

  eraseUsername(){
    this.username = '';
    this.allowEntering = false;
  }
}
