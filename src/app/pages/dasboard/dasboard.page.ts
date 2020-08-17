import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController } from '@ionic/angular';
import { ModalSearchPage } from '../modal-search/modal-search.page';
import { ModalRecommendedPage } from '../modal-recommended/modal-recommended.page';
import { ModalProductdetailsPage } from '../modal-productdetails/modal-productdetails.page';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit {
  @ViewChild('slide' , {static: true} ) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };
  constructor( private navCtrl: NavController,public modalController: ModalController) { }

  ngOnInit() {
  }

  goTo(url) {
    this.navCtrl.navigateForward(url)
  }



  async modalproductosdetalles(){
    const modal = await this.modalController.create({
      component: ModalProductdetailsPage,
      cssClass: 'productosdetalles-modal'
    });
    return await modal.present();
  }


  async modalbuscar(){
    const modal = await this.modalController.create({
      component: ModalSearchPage,
      cssClass: 'buscar-modal'
    });
    return await modal.present();
  }

  async modalrecomendado(){
    const modal = await this.modalController.create({
      component: ModalRecommendedPage,
      cssClass: 'recomendado-modal'
    });
    return await modal.present();
  }

}
