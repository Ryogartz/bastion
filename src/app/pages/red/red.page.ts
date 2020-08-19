import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.page.html',
  styleUrls: ['./red.page.scss'],
})
export class RedPage implements OnInit {
  user:any = [];

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
