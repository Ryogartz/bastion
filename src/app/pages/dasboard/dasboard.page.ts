import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController } from '@ionic/angular';
import { ModalRecommendedPage } from '../modal-recommended/modal-recommended.page';

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
  user:any = [];

  constructor( private navCtrl: NavController,public modalController: ModalController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  goTo(url) {
    this.navCtrl.navigateForward(url)
  }


  async modalrecomendado(){
    const modal = await this.modalController.create({
      component: ModalRecommendedPage,
      cssClass: 'recomendado-modal'
    });
    return await modal.present();
  }

}
