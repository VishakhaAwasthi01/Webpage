import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OpenMenu() {
    document.getElementById("menu").style.width="100%";
  }
  CloseMenu(){
    document.getElementById("menu").style.width="0";
  }


}

