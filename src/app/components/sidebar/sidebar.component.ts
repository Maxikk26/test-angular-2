import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from './../../services/sidebar-toggle.service';
declare var $;
var sideMenu = $('#side-menu').metisMenu();

function fix_height() {
  var heightWithoutNavbar = $("body > #wrapper").height() - 62;
  $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

  var navbarheight = $('nav.navbar-default').height();
  var wrapperHeight = $('#page-wrapper').height();

  if (navbarheight > wrapperHeight) {
      $('#page-wrapper').css("min-height", navbarheight + "px");
  }

  if (navbarheight < wrapperHeight) {
      $('#page-wrapper').css("min-height", $(window).height() + "px");
  }

  if ($('body').hasClass('fixed-nav')) {
      if (navbarheight > wrapperHeight) {
          $('#page-wrapper').css("min-height", navbarheight + "px");
      } else {
          $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
      }
  }

}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){
    sideMenu.on('shown.metisMenu', function(e) {
      fix_height();
  });
  }

    

}
