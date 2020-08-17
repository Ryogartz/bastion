import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.page.html',
  styleUrls: ['./modal-pedido.page.scss'],
})
export class ModalPedidoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }

}
