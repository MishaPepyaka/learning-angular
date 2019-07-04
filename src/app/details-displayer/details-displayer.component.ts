import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-displayer',
  templateUrl: './details-displayer.component.html',
  styleUrls: ['./details-displayer.component.css']
})
export class DetailsDisplayerComponent implements OnInit {

  secretRendering = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.secretRendering = this.secretRendering ? false : true;
    this.clicks.push(new Date());
  }

}
