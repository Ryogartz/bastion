import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagesModalEditPage } from '../../pages-modal-edit/pages-modal-edit.page';

@Component({
  selector: 'app-red',
  templateUrl: './red.page.html',
  styleUrls: ['./red.page.scss'],
})
export class RedPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PagesModalEditPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      animated:true,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
