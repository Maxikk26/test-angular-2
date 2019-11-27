import { Component, OnInit } from '@angular/core';
import { ShowService } from './../../services/show.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _showService:ShowService) {
    
   }

  ngOnInit() {
  }

}
