import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from './../../services/sidebar-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _sidebar:SidebarToggleService) { }

  ngOnInit() {
  }

}
