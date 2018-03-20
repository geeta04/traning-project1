import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  display:any;

  constructor(private dataService:DataserviceService) {
    console.log('constructor ran');
   }

  ngOnInit() {
    console.log('ng onit ran');
    this.display=this.dataService.getPostMethod();
  }

}
