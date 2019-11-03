import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  condX = false;
  condY = false;

  r2condX = false;
  r2condY = true;

  r3condX = true;
  r3condY = false;

  r4condX = true;
  r4condY = true;
  
  constructor() { }

  ngOnInit() {
  }

}
