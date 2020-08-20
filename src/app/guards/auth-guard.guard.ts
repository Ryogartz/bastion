import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../providers/constantes';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
      private navCtrl: NavController
  ) { }

  canActivate() {
      //Validamos que existe un usuario en el localstorage almacenado
      let token = localStorage.getItem(CONSTANTES.LOCAL_STORAGE.token);
      if (!token) {
          return true;
      } else {
              this.navCtrl.navigateRoot('/dashboard');
              return false;
      }
  }
}

