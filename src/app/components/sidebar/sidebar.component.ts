import { Component, OnInit } from '@angular/core';
import { ShowService } from './../../services/show.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _showService:ShowService) {
    
   }

  ngOnInit() {
    
  }

    

}
