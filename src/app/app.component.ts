import { Component, OnInit } from '@angular/core';
import *  as JQuery from '../templates/js/jquery-3.1.1.min.js';

function SmoothlyMenu() {
  if (!JQuery('body').hasClass('mini-navbar') || JQuery('body').hasClass('body-small')) {
      // Hide menu in order to smoothly turn on when maximize menu
      JQuery('#side-menu').hide();
      // For smoothly turn on menu
      setTimeout(
          function() {
            JQuery('#side-menu').fadeIn(400);
          }, 200);
  } else if (JQuery('body').hasClass('fixed-sidebar')) {
    JQuery('#side-menu').hide();
      setTimeout(
          function() {
            JQuery('#side-menu').fadeIn(400);
          }, 100);
  } else {
      // Remove all inline style from JQuery fadeIn function to reset menu state
      JQuery('#side-menu').removeAttr('style');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-angular-v2';

  ngOnInit(){
    JQuery('.navbar-minimalize').on('click', function(event) {
      event.preventDefault();
      JQuery("body").toggleClass("mini-navbar");
      SmoothlyMenu();

    });
  }
}
