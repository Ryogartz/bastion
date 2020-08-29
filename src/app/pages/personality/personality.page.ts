import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.page.html',
  styleUrls: ['./personality.page.scss'],
})
export class PersonalityPage implements OnInit {
  user:any = [];
  public formGroup: FormGroup;
  constructor(private navCtrl: NavController,
    private fb: FormBuilder,
    private service: AuthService,
    public alertController: AlertController,
    private utilities: UtilitiesService) {
    this.formGroup = this.fb.group({
      Nombre: ['', Validators.compose([Validators.required])],
      Edad: ['', Validators.compose([Validators.required])],
      p1: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
      p2: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
      p3: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
      p4: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
      p5: ['', Validators.compose([Validators.required, Validators.minLength(100)])],
    });
   }
  step = 1;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ionViewDidLoad(){
    this.formGroup.reset();
  }
  progressBar(){
    return this.step*0.16;
  }
  progressBuffer(){
    return this.step*0.16 + 0.05;
  }
  goTo(url, data) {
  /*   data = [data]; */
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: JSON.stringify(data)
      }
  };
    this.navCtrl.navigateForward(url, navigationExtras);
  }

  async sendData(){
    await this.utilities.displayLoading();

    this.service.personality(this.formGroup).then((res: any) =>{
      this.utilities.dismissLoading();
        if(res === null){
          this.presentAlert()
          this.goTo('/dashboard', null);
        }else{
          console.log("resultado",res);
          this.goTo('/results', res);
        }
    },
    (err)=>{
      this.utilities.dismissLoading();
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Complete los campos de forma correcta.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
