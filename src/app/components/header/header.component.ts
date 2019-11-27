import { Component, OnInit } from '@angular/core';
import { ShowService } from './../../services/show.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _showService:ShowService) { }

  ngOnInit() {
  }

}
