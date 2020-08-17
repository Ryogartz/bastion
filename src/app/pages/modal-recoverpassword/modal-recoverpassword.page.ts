import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-recoverpassword',
  templateUrl: './modal-recoverpassword.page.html',
  styleUrls: ['./modal-recoverpassword.page.scss'],
})
export class ModalRecoverpasswordPage implements OnInit {

  constructor(  public modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }

}
