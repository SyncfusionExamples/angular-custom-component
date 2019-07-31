import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomComponentComponent implements OnInit {

  constructor() { }
  public dateValue = new Date();
  ngOnInit() {
  }

}
