import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {
  data = {
    buscar:null,
    lat_origin:11.07511,
    lon_origin:-63.970445,
  }
  product:any

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


  constructor(public modalController: ModalController , private service: AuthService) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }

  
  get(valor){
    this.data.buscar = valor.target.value
  }

  async search(){

    console.log("buscar")
    const productos:any = await this.service.ProductShow(this.data)
    console.log(productos.productos.data)
    this.product = productos.productos.data

  }


}
