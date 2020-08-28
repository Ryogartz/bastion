import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
/* import { SwUpdate } from '@angular/service-worker';
 */
import { MenuController, Platform, ToastController, NavController, ModalController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { AuthService } from './providers/auth/auth.service';
import { CONSTANTES } from './providers/constantes';
import { UtilitiesService } from './providers/utilities/utilities.service';
import { SplashPage } from './splash/splash.page';

/* import { OneSignal } from '@ionic-native/onesignal/ngx'; */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Inicio',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Red',
      url: '/red',
      icon: 'people'
    },
    {
      title: 'Insight',
      url: '',
      icon: 'people'
    },
    {
      title: 'Salir',
      icon: 'log-out'
    },
 
  ];
  loggedIn = false;
  dark = false;
  data: any = [];

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private service: AuthService,
    /* private oneSignal: OneSignal, */
  /*   private swUpdate: SwUpdate, */
    private toastCtrl: ToastController,
    private utilities: UtilitiesService,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();

  /*   this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    }); */
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      let splash = await this.modalCtrl.create({
        component: SplashPage
      });
            splash.present();
      //this.splashScreen.hide();
    /*   this.oneSignal.startInit("5c96e755-64ea-4b9f-834d-21973c70d45e", "65764984501")
      .inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
      .endInit(); */

    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  async logout(data) {

    if( data === "Salir"){

      this.service.logOut().then(() => {
        return this.router.navigateRoot('/login');
      });

    }
    if(data == 'Insight'){
      await this.utilities.displayLoading();
      this.service.checkInsight().then((data) => {
        this.data = data['test'];
        console.log( this.data);
        this.utilities.dismissLoading();
        if(this.data)
        {
        let navigationExtras: NavigationExtras = {
          queryParams: {
              data: data['test'].test
          }
        };
          this.router.navigateRoot('/results', navigationExtras);
      }
        else{
          return this.router.navigateRoot('/personality');;
        }
      });
    }
  }



  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateRoot('/tutorial');
  }

  logIn(){
    return localStorage.getItem(CONSTANTES.LOCAL_STORAGE.token);
  }
}
