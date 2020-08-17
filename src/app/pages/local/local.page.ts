import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';
import { ModalPedidoPage } from '../modal-pedido/modal-pedido.page';
import { ModalLocalinfoPage } from '../modal-localinfo/modal-localinfo.page';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -80,
  };
  
  constructor(public modalController: ModalController,private navCtrl: NavController) { }

  ngOnInit() {
  }


  async modal(){

      const modal = await this.modalController.create({
        component: ModalPedidoPage,
        cssClass: 'pedido-modal'
      });
      return await modal.present();
    
  }

  async modallocal(){

    const modal = await this.modalController.create({
      component: ModalLocalinfoPage,
      cssClass: 'localinfo-modal'
    });
    return await modal.present();
  
}

  atras(){
   this.navCtrl.back()
  }

}
