import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-pages-modal-edit',
  templateUrl: './pages-modal-edit.page.html',
  styleUrls: ['./pages-modal-edit.page.scss'],
})
export class PagesModalEditPage implements OnInit {
  @Input() item: any[];
  data: any;
  marker: any;
  map: any;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  constructor(public modalCtrl: ModalController,private navctrl: NavController, private geolocation: Geolocation) { }

  ngOnInit() {
    console.log(this.item);
    this.initMapExample();
  }

  async initMapExample() { // Funcion de ejemplo para mostrar mapa
    const markerData: any = [
      { lat: 22.3, lng: 70.8, text: 'Looks Unisex Salon' },
      { lat: 22.3, lng: 70.81, text: 'Beauty Plus Spa' },
      { lat: 22.31, lng: 70.8, text: 'RedBox Barber' },
      { lat: 22.33, lng: 70.81, text: 'Divine Salon' }
    ];
    let coords = await this.geolocation.getCurrentPosition();
    console.log(coords.coords.latitude);
    
    let latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);
    if(this.item['latitud']){
       latLng = new google.maps.LatLng(this.item['latitud'], this.item['longitud']);
    }
    const mapoption = {
      center: latLng,
      zoom: 15,
      streetViewControl: false,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapoption);
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      animation: google.maps.Animation.DROP,
      position: {lat: coords.coords.latitude, lng: coords.coords.longitude}
    });
    /* google.maps.event.addListener(this.map, 'click', (event) => {
      this.marker.setPosition(event.latLng)
    }); */
    this.marker.addListener('dragend', (event)=> {
 }); 
    this.marker.setMap(this.map);
 
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
      this.navctrl.navigateRoot('/voters', navigationExtras);
   
  }

}
