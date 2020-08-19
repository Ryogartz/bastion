import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pages-modal-edit',
  templateUrl: './pages-modal-edit.page.html',
  styleUrls: ['./pages-modal-edit.page.scss'],
})
export class PagesModalEditPage implements OnInit {
  @Input() item: any[];
  constructor(public modalCtrl: ModalController,private navctrl: NavController) { }

  ngOnInit() {
    console.log(this.item);
    
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  edit(){
    this.navctrl.navigateForward('/voters');
      let navigationExtras: NavigationExtras = {
        queryParams: {
            data: JSON.stringify(this.item)
        }
    };
      this.navctrl.navigateForward('/voters', navigationExtras);
   
  }

}
