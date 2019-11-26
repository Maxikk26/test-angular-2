import { Injectable } from '@angular/core';
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
  } else if ($('body').hasClass('fixed-sidebar')) {
      $('#side-menu').hide();
      setTimeout(
          function() {
              $('#side-menu').fadeIn(400);
          }, 100);
  } else {
      // Remove all inline style from jquery fadeIn function to reset menu state
      $('#side-menu').removeAttr('style');
  }
}

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {

  constructor() { }

  toggle():void{
    $('.navbar-minimalize').on('click', function(event) {
      event.preventDefault();
      $("body").toggleClass("mini-navbar");
      //SmoothlyMenu();
    });

    
  }

  
}
