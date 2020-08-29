import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController } from '@ionic/angular';
import { ModalRecommendedPage } from '../modal-recommended/modal-recommended.page';
import { AuthService } from '../../providers/auth/auth.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { CONSTANTES } from '../../providers/constantes';
import { PagesModalEditPage } from '../../pages-modal-edit/pages-modal-edit.page';
import { NavigationExtras } from '@angular/router';

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
  refereds: any = [];
  busqueda: string;
  searchResult: any;

  constructor( private navCtrl: NavController,public modalController: ModalController,  public auth: AuthService, private utilities: UtilitiesService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMyrefered();
  }

  goTo(url) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: null
      }
  };
    this.navCtrl.navigateForward(url, navigationExtras)
  }

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: PagesModalEditPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      animated:true,
      componentProps: {
        'item': item
      }
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

  async getMyrefered(){
    // Iniciamos la consulta
    await this.auth.myrefered().then( (res)=>{
      console.log(res);
      this.refereds = res['users'];
      this.searchResult = this.refereds;
    },(err)=>{
      //En caso de error
      this.utilities.displayToastButtonTime(err.error.message ? err.error.message : CONSTANTES.MESSAGES.error);
      console.log("getError", err );
    })
  }

  search(){
    if(this.busqueda != ''){
      let result = this.refereds.filter((item) => {
        return item.name.toLowerCase().indexOf(
          this.busqueda.toLowerCase()) > -1;
        });
        if (result.length > 0) {
          this.searchResult = result;
        }else{
          this.searchResult = this.refereds;
        }
        console.log(result);
        
    }else{
      this.searchResult = this.refereds;
    }
  }
}
