import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data
  constructor() {

    this.data = ["nitin","aman","jatin","raman","ayush"];
    
   }

  ngOnInit() {
  }

}
