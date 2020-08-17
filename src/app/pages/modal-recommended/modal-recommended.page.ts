import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-modal-recommended',
  templateUrl: './modal-recommended.page.html',
  styleUrls: ['./modal-recommended.page.scss'],
})
export class ModalRecommendedPage implements OnInit {

  @ViewChild('slide' , {static: true} ) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    spaceBetween: 0,
  };
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }


}
