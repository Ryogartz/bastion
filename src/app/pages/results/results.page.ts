import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  user: any [];
  data: any = [];
  sumatoria: number;

  constructor( private route: ActivatedRoute, private navCtrl: NavController, public utilities: UtilitiesService, private service: AuthService) {
   
    this.route.queryParams.subscribe(data => {
      this.data = JSON.parse(data['data']);
 
    Object.assign(this, { single });
    console.log(this.data);
  this.sumatoria = 0; 
  this.sumatoria+= this.data['Audacia'].N*100;
  this.sumatoria+= this.data['Intelecto'].N*100;
  this.sumatoria+= this.data['Autodisciplina'].N*100;
  this.sumatoria+= this.data['Sociabilidad'].N*100;
  this.sumatoria+= this.data['Responsabilidad'].N*100;
  console.log(this.sumatoria);
  console.log(this.calculo(this.data['Audacia'].N*100, this.sumatoria))
    this.single[0].value = this.data['Audacia'].N*100;
    this.single[1].value = this.data['Intelecto'].N*100;
    this.single[2].value = this.data['Autodisciplina'].N*100;
    this.single[3].value = this.data['Sociabilidad'].N*100;
    this.single[4].value = this.data['Responsabilidad'].N*100; 
    console.log(single);

  })
   }
   calculo(c, b){
     return (c/b*100).toFixed(1);
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  single: any[];
  view: any[] = [400, 500];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legend:boolean = false;
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };



  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  show(){
    return 'asdas';
  }

  goTo(url, data) {

      let navigationExtras: NavigationExtras = {
        queryParams: {
            data: JSON.stringify(data)
        }
    };
      this.navCtrl.navigateForward(url, navigationExtras);
    }

    async sendData(test){
      console.log(test);
      let data = {
        test: test
      }
      console.log(data);
      await this.utilities.displayLoading('Guardando prueba...');
      this.service.addInsight(test).then((res: any) =>{
        this.utilities.dismissLoading();
      /*   console.log(res);
        this.goTo('/results', res); */
      },
      (err)=>{
        this.utilities.dismissLoading();
      })
    }
}

