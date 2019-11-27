import { Component, OnInit } from '@angular/core';
import { ShowService } from './../../services/show.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show:boolean;

  constructor(public _showService:ShowService) {
    this._showService.hide();
    
   }

  ngOnInit() {
  }

}
