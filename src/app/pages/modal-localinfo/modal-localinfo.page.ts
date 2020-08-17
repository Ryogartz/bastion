import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-localinfo',
  templateUrl: './modal-localinfo.page.html',
  styleUrls: ['./modal-localinfo.page.scss'],
})
export class ModalLocalinfoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }

}
