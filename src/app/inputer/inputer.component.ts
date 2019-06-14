import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputer',
  templateUrl: './inputer.component.html',
  styleUrls: ['./inputer.component.css']
})
export class InputerComponent implements OnInit {
  username = '';
  
  constructor() {} 

  clickableButton() {
    if (this.username === '') {
      return true;
    } else {
      return false;
    }
    
  }

  emptyUsername() {
    this.username = '';
  }

  ngOnInit() {
  }

}
