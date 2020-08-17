import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-productdetails',
  templateUrl: './modal-productdetails.page.html',
  styleUrls: ['./modal-productdetails.page.scss'],
})
export class ModalProductdetailsPage implements OnInit {

  constructor(public modalController: ModalController , private navCtrl: NavController) { }

  ngOnInit() {
  }

  go() {
    this.modalController.dismiss()
    this.navCtrl.navigateForward('/local')
  }

}
