import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private utilities: UtilitiesService) {
    this.formGroup = this.fb.group({
      Nombre: ['', Validators.compose([Validators.required])],
      Edad: ['', Validators.compose([Validators.required])],
      p1: ['un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia, un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia', Validators.compose([Validators.required, Validators.minLength(140)])],
      p2: ['un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia, un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia', Validators.compose([Validators.required, Validators.minLength(140)])],
      p3: ['un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia, un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia', Validators.compose([Validators.required, Validators.minLength(140)])],
      p4: ['un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia, un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia', Validators.compose([Validators.required, Validators.minLength(140)])],
      p5: ['un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia, un día en el que pueda resolver mis pendiente de forma tranquila y que al llegar el final del día pueda relajarme con mi familia', Validators.compose([Validators.required, Validators.minLength(140)])],
    });
   }
  step = 7;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
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
      console.log(res);
      this.goTo('/results', res);
    },
    (err)=>{
      this.utilities.dismissLoading();
    })
  }

}
