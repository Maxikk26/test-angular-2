import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from './../../services/sidebar-toggle.service';
declare var $;

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
      // Hide menu in order to smoothly turn on when maximize menu
      $('#side-menu').hide();
      // For smoothly turn on menu
      setTimeout(
          function() {
              $('#side-menu').fadeIn(400);
          }, 200);
  } 
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _sidebar:SidebarToggleService) { }

  ngOnInit() {
  }

  toggleSidebar():void{
   
      $("body").toggleClass("mini-navbar");
      SmoothlyMenu();
  }

}
