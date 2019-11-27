import { Component, OnInit } from '@angular/core';
import { ContentService,Content } from "../../services/content.service";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  contents:Content[];

  constructor(private _contentService:ContentService) {
    this.contents = this._contentService.getContent();
  }

  ngOnInit() {
    setTimeout(()=>{window.print()},1000);
    window.onafterprint = ()=>{window.close()};
  }

}
