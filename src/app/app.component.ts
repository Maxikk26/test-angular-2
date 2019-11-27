import { Component, OnInit } from '@angular/core';
import { ShowService } from './services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-angular-v2';
  show:boolean;

  constructor(public _showService:ShowService){
    
  }

  ngOnInit(){
  }
}
