import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) { }


    /**
   * Método para registrar un usuario
   * @param data Datos del usuario*
   * **/
  public signUp(data: any) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/register', data);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

    /**
   * Método para iniciar sesion un usuario
   * @param data Datos del usuario*
   * **/
  public signIn(data) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/login', data);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public logOut() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get('api/auth/logout', null, true);
      seq.subscribe((res: any) => {
        resolve(res);
        localStorage.clear();
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

     /**
   * Método para obtener la informacion del usuario logueado
   * **/
  public getUser() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get('api/auth/user', null, true);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public addrefere(form) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/refered/add', form, true);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public myrefered() {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/refered/myrefered', null, true);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public editUser(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/user', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }
  public delete(){
   return true;
  }

  
  //mostrar product 
  public ProductShow(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/product/show', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  //buscar
  public searchEmail(data) {
    console.log("data recibida",data)
    return new Promise((resolve, reject) => {
      const parametro = {
        email:data
      }
      let observer:Observable<any> = this.api.post(`api/auth/chek-email`, parametro);
      observer.subscribe((res: any) => {
        console.log(res.message)
        const str = res['message'].includes("Available")
        str == true ? resolve(true) : resolve(false)
      }, err => {
        reject(err);
      });
    })
  }

  //producto 
  public ProductRecommend(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/product/recommend', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }
 
}
