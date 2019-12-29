import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() bike: any;

  constructor() { 
  }

  ngOnInit() {
    console.log('bike: ', this.bike); 
  }

}
