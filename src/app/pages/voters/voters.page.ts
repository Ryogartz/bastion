import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CONSTANTES } from '../../providers/constantes';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { AuthService } from '../../providers/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-voters',
  templateUrl: './voters.page.html',
  styleUrls: ['./voters.page.scss'],
})
export class VotersPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  user:any = [];
  imgSelected: any;
  map: any;
  public formGroup: FormGroup;
  data: any;
  constructor(private navCtrl: NavController,
              private webView: WebView, 
              private alertCtrl: AlertController,
              private camera: Camera,
              private geolocation: Geolocation,
              private fb: FormBuilder,
              public auth: AuthService,
              private utilities: UtilitiesService,
              private route: ActivatedRoute) {

                this.route.queryParams.subscribe(data => {
                  this.data = JSON.parse(data['data']);
                  if(this.data){
                    this.formGroup = this.fb.group({
                      email: [this.data.email, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
                      name: [this.data.name, Validators.compose([Validators.required])],
                      lastname: [this.data.lastname, Validators.compose([Validators.required])],
                      phone: [this.data.phone, Validators.compose([Validators.required])],
                      point: [this.data.point, Validators.compose([Validators.required])],
                      facebook: [this.data.facebook, Validators.compose([Validators.required])],
                      photo: [this.data.avatar, Validators.compose([Validators.required])],
                      longitud: [this.data.latitude],
                      latitud: [this.data.longitude],
                      address: [this.data.address, Validators.compose([Validators.required])],
                    });
                    this.imgSelected = this.data.avatar;
                  }else{
                    this.formGroup = this.fb.group({
                      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
                      name: ['', Validators.compose([Validators.required])],
                      lastname: ['', Validators.compose([Validators.required])],
                      phone: ['', Validators.compose([Validators.required])],
                      point: ['', Validators.compose([Validators.required])],
                      facebook: ['', Validators.compose([Validators.required])],
                      photo: ['', Validators.compose([Validators.required])],
                      longitud: [''],
                      latitud: [''],
                      address: ['', Validators.compose([Validators.required])],
                    });
                  }
              })
               }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMyrefered();
    this.initMapExample();
  }

  async captureImage() {
    let st = this.camera.PictureSourceType.CAMERA;
    await this.seleccionarFuente().then((result: boolean) => {
      if (result) {
        st = this.camera.PictureSourceType.CAMERA;
      } else {
        st = this.camera.PictureSourceType.PHOTOLIBRARY;
      }
    });

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: st,
      allowEdit: true,
    }

    this.camera.getPicture(options).then((imageData) => {

      this.imgSelected = this.webView.convertFileSrc(imageData);
      this.formGroup.controls.photo.setValue(imageData);
     }, (err) => {
      // Handle error
      console.log("cameraE", err);
     });
  }

  seleccionarFuente() {
    return new Promise(async resolve => {

      const alert = await this.alertCtrl.create({
        header: 'Seleccionar Imágen',
        cssClass: 'uploadmessage',
        message: '¿Qué desea hacer?',
        buttons: [
          {
            text: "Tomar Foto",
            cssClass: 'btn_alert',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: "Buscar en Galería",
            cssClass: 'btn_alert',
            handler: () => {
              resolve(false);
            }
          }
        ]
      });

      await alert.present();
    });
  }

  async initMapExample() { // Funcion de ejemplo para mostrar mapa
    const markerData: any = [
      { lat: 22.3, lng: 70.8, text: 'Looks Unisex Salon' },
      { lat: 22.3, lng: 70.81, text: 'Beauty Plus Spa' },
      { lat: 22.31, lng: 70.8, text: 'RedBox Barber' },
      { lat: 22.33, lng: 70.81, text: 'Divine Salon' }
    ];
    let coords = await this.geolocation.getCurrentPosition();
    let latLng;
    if(this.data){
       latLng = new google.maps.LatLng(this.data.latitud, this.data.longitud);
    }else{
       latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);
      this.formGroup.controls.latitud.setValue(coords.coords.latitude);
      this.formGroup.controls.longitud.setValue(coords.coords.longitude);
    }
    const mapoption = {
      center: latLng,
      zoom: 15,
      streetViewControl: false,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapoption);
    const markerIcon = {
      url: '../../../assets/images/near-by/map-image.png',
      labelOrigin: new google.maps.Point(25, 63),
      scaledSize: new google.maps.Size(56, 64)
    };
   /*  markerData.forEach((element: any, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(element.lat, element.lng),
        map: this.map,
        icon: markerIcon,
        label: {
          text: element.text,
          fontSize: '12px',
          fontFamily: 'tofini_medium',
          width: '30px'
        }
      });
    }); */
  }

  async add(){
    // Iniciamos la consulta
    await this.auth.addrefere(this.formGroup.value).then( (res)=>{
      this.utilities.displayToast('Votante registrado exitosamente')
      this.navCtrl.pop();
    },(err)=>{
      //En caso de error
      this.utilities.displayToastButtonTime(err.error.message ? err.error.message : CONSTANTES.MESSAGES.error);
      console.log("getError", err );
    })
  }

  async getMyrefered(){
    // Iniciamos la consulta
    await this.auth.myrefered().then( (res)=>{
      console.log(res);
    },(err)=>{
      //En caso de error
      this.utilities.displayToastButtonTime(err.error.message ? err.error.message : CONSTANTES.MESSAGES.error);
      console.log("getError", err );
    })
  }
  back(){
    this.navCtrl.pop();
  }
  show(){
    console.log(this.formGroup);
    
  }

}
