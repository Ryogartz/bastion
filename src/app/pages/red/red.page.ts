import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagesModalEditPage } from '../../pages-modal-edit/pages-modal-edit.page';
import { AuthService } from '../../providers/auth/auth.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CONSTANTES } from '../../providers/constantes';

@Component({
  selector: 'app-red',
  templateUrl: './red.page.html',
  styleUrls: ['./red.page.scss'],
})
export class RedPage implements OnInit {
  user:any = [];
  refereds: any;
  busqueda: string;
  searchResult: any;

  constructor(public modalController: ModalController,  
              private fb: FormBuilder,
              public auth: AuthService,
              private utilities: UtilitiesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMyrefered();
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
  async getMyrefered(){
    // Iniciamos la consulta
    await this.utilities.displayLoading('Por favor espere...');
    await this.auth.myrefered().then( (res)=>{
      console.log(res);
      this.refereds = res['users'];
      this.searchResult = this.refereds;
      this.utilities.dismissLoading();

    },(err)=>{
      //En caso de error
      this.utilities.dismissLoading();
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
