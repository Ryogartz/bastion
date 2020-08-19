import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.page.html',
  styleUrls: ['./voters.page.scss'],
})
export class VotersPage implements OnInit {
  user:any = [];

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
