import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { AuthService } from '../../providers/auth/auth.service';
import { CONSTANTES } from '../../providers/constantes';
/* import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx'; */
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;
  showQR = false;
  data:boolean;
  data2:boolean;


  @ViewChild('slides', { static: true }) slides: IonSlides;
  option_:boolean = false;
  user:any = [];
  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private utilities: UtilitiesService,
    private auth: AuthService,
   /*  private qrScanner: QRScanner */
  ) {
   
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/dashboard', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }
  prueba(){
    this.option_ = !this.option_;
    console.log(this.option_);
    if(this.option_){
      this.slides.lockSwipes(false);
    }
  }



  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }


  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.slides.lockSwipes(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  adelante(){
    this.slides.slideNext()
  }

 /*  qrScan(){
this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  } */

  atras(){
    this.slides.slidePrev()
  }

  optionUser(check){
    console.log(this.data)
  }
  
}
