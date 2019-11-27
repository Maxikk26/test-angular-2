import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  visible: boolean;
  showLogin:boolean;

  constructor() { this.visible = false; this.showLogin=true; }

  hide() { this.visible = false;this.showLogin =true; }

  show() { this.visible = true; this.showLogin =false; }

  toggle() { this.visible = !this.visible;  this.showLogin = !this.showLogin;}
}
