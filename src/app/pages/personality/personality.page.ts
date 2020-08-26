import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.page.html',
  styleUrls: ['./personality.page.scss'],
})
export class PersonalityPage implements OnInit {
  user:any = [];
  constructor(private navCtrl: NavController) { }
  step = 1;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  progressBar(){
    return this.step*0.16;
  }
  progressBuffer(){
    return this.step*0.16 + 0.05;
  }
  goTo(url) {

    this.navCtrl.navigateForward(url);
  }

}
